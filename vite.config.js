import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages can't send security headers, so the policy ships as a <meta>
// tag. Build-only: the dev server needs inline scripts for hot reload.
// Everything is self-hosted, so nothing outside this site is allowed.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ')

const contentSecurityPolicy = () => ({
  name: 'content-security-policy',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), contentSecurityPolicy()],
})
