// Renders public/favicon.ico (16/32/48) and public/apple-touch-icon.png (180)
// from the same geometry as public/favicon.svg. Keep the two in sync.
// No dependencies: shapes are rasterized with 4x4 supersampling and written
// as PNG with Node's built-in zlib.  Run: node scripts/make-icons.mjs
import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const NAVY = [0x0d, 0x13, 0x22]
const CYAN = [0x74, 0xc7, 0xe0]
const AMBER = [0xf2, 0xa9, 0x3b]

// 32x32 design units, matching favicon.svg.
const C = 16
const NODES = [[16, 5.5], [25.1, 10.75], [25.1, 21.25], [16, 26.5], [6.9, 21.25], [6.9, 10.75]]

const inRoundedRect = (x, y, size, r) => {
  const cx = Math.min(Math.max(x, r), size - r)
  const cy = Math.min(Math.max(y, r), size - r)
  return x >= 0 && y >= 0 && x <= size && y <= size && (x - cx) ** 2 + (y - cy) ** 2 <= r * r
}

const distToSegment = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax, dy = by - ay
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
}

// Colour of one sample point (design units), as [r, g, b, a] with a in 0..1.
const sample = (x, y, full) => {
  // The apple-touch icon is cropped by iOS, so it fills the square.
  if (!full && !inRoundedRect(x, y, 32, 7)) return [0, 0, 0, 0]
  let col = [...NAVY]
  const over = (c, a) => { col = col.map((v, i) => v * (1 - a) + c[i] * a) }
  if (NODES.some(([nx, ny]) => distToSegment(x, y, C, C, nx, ny) <= 0.8)) over(CYAN, 0.55)
  if (NODES.some(([nx, ny]) => Math.hypot(x - nx, y - ny) <= 2.3)) over(CYAN, 1)
  if (Math.hypot(x - C, y - C) <= 4.8) over(AMBER, 1)
  return [...col, 1]
}

const render = (size, full = false) => {
  const SS = 4
  const px = Buffer.alloc(size * size * 4)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const s = sample(((x + (sx + 0.5) / SS) / size) * 32, ((y + (sy + 0.5) / SS) / size) * 32, full)
          r += s[0] * s[3]; g += s[1] * s[3]; b += s[2] * s[3]; a += s[3]
        }
      }
      const i = (y * size + x) * 4
      px[i] = a ? Math.round(r / a) : 0
      px[i + 1] = a ? Math.round(g / a) : 0
      px[i + 2] = a ? Math.round(b / a) : 0
      px[i + 3] = Math.round((a / (SS * SS)) * 255)
    }
  }
  return px
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type), data])
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}
const png = (size, pixels) => {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8; ihdr[9] = 6 // 8-bit RGBA
  const rows = Buffer.alloc(size * (size * 4 + 1))
  for (let y = 0; y < size; y++) pixels.copy(rows, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4)
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(rows)), chunk('IEND', Buffer.alloc(0)),
  ])
}

// ICO containing PNG images (supported by every browser that still reads .ico).
const ico = (images) => {
  const head = Buffer.alloc(6 + 16 * images.length)
  head.writeUInt16LE(1, 2); head.writeUInt16LE(images.length, 4)
  let offset = head.length
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i
    head[e] = size; head[e + 1] = size
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6)
    head.writeUInt32LE(data.length, e + 8); head.writeUInt32LE(offset, e + 12)
    offset += data.length
  })
  return Buffer.concat([head, ...images.map((im) => im.data)])
}

const out = new URL('../public/', import.meta.url)
writeFileSync(new URL('favicon.ico', out), ico([16, 32, 48].map((size) => ({ size, data: png(size, render(size)) }))))
writeFileSync(new URL('apple-touch-icon.png', out), png(180, render(180, true)))
console.log('wrote public/favicon.ico and public/apple-touch-icon.png')
