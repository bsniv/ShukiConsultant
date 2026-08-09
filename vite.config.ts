import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages has no SPA rewrite, so deep links (/accessibility, /service/:id)
// hit its 404 handler. Serving a copy of index.html as 404.html lets the router
// take over instead.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const outDir = resolve(__dirname, 'dist')
    copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
