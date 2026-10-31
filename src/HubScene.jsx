import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const AMBER = 0xf2a93b
const CYAN = 0x74c7e0
const SPOKE = 0x2c3a58

// One node per Azure subscription supported, on three tilted rings
// around a central hub: hub-and-spoke, like the network itself.
const RINGS = [
  { count: 22, radius: 1.5, tilt: [0.12, 0, 0.06] },
  { count: 30, radius: 2.15, tilt: [-0.1, 0, -0.12] },
  { count: 38, radius: 2.8, tilt: [0.06, 0, 0.16] },
]
const PACKETS = 7

const buildNodes = () => {
  const nodes = []
  for (const ring of RINGS) {
    const euler = new THREE.Euler(...ring.tilt)
    for (let i = 0; i < ring.count; i++) {
      const a = (i / ring.count) * Math.PI * 2 + ring.radius
      const r = ring.radius * (0.94 + Math.random() * 0.12)
      const v = new THREE.Vector3(Math.cos(a) * r, (Math.random() - 0.5) * 0.25, Math.sin(a) * r)
      nodes.push(v.applyEuler(euler))
    }
  }
  return nodes
}

const HubScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 4.2, 7.4)
    camera.lookAt(0, 0, 0)

    const network = new THREE.Group()
    scene.add(network)

    const nodes = buildNodes()

    const spokeGeo = new THREE.BufferGeometry().setFromPoints(
      nodes.flatMap((n) => [new THREE.Vector3(), n])
    )
    network.add(new THREE.LineSegments(spokeGeo,
      new THREE.LineBasicMaterial({ color: SPOKE, transparent: true, opacity: 0.55 })))

    network.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(nodes),
      new THREE.PointsMaterial({ color: CYAN, size: 0.075 })))

    const hub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1),
      new THREE.MeshBasicMaterial({ color: AMBER, wireframe: true }))
    network.add(hub)

    // Signals travelling from the hub out to a node, then picking a new one.
    const packetGeo = new THREE.BufferGeometry()
    const packetPos = new Float32Array(PACKETS * 3)
    packetGeo.setAttribute('position', new THREE.BufferAttribute(packetPos, 3))
    network.add(new THREE.Points(packetGeo, new THREE.PointsMaterial({ color: AMBER, size: 0.1 })))
    const packets = Array.from({ length: PACKETS }, (_, i) => ({
      target: nodes[Math.floor(Math.random() * nodes.length)],
      t: i / PACKETS,
      speed: 0.25 + Math.random() * 0.2,
    }))

    const pointer = { x: 0, y: 0 }
    const onPointer = (e) => {
      pointer.x = e.clientX / window.innerWidth - 0.5
      pointer.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onPointer)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      if (reduceMotion) renderer.render(scene, camera)
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    let last = performance.now()
    const draw = () => {
      const now = performance.now()
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      network.rotation.y += dt * 0.08
      network.rotation.x += (pointer.y * 0.3 - network.rotation.x) * 0.04
      network.rotation.z += (-pointer.x * 0.2 - network.rotation.z) * 0.04
      hub.rotation.x += dt * 0.3

      packets.forEach((p, i) => {
        p.t += dt * p.speed
        if (p.t >= 1) {
          p.t = 0
          p.target = nodes[Math.floor(Math.random() * nodes.length)]
        }
        packetPos.set([p.target.x * p.t, p.target.y * p.t, p.target.z * p.t], i * 3)
      })
      packetGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    let visible = true
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      last = performance.now()
    })
    visibility.observe(mount)

    if (reduceMotion) {
      packets.forEach((p) => { p.speed = 0 })
      draw()
    } else {
      renderer.setAnimationLoop(() => { if (visible) draw() })
    }

    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('pointermove', onPointer)
      resizeObserver.disconnect()
      visibility.disconnect()
      scene.traverse((obj) => {
        obj.geometry?.dispose()
        obj.material?.dispose()
      })
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="hub-scene" aria-hidden="true" />
}

export default HubScene
