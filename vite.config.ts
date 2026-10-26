import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { imagetools } from 'vite-imagetools'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoBase = '/tartaruga/'

function spaFallback404() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const index = path.resolve('dist/index.html')
      const dest = path.resolve('dist/404.html')
      if (fs.existsSync(index)) fs.copyFileSync(index, dest)
    },
  }
}

export default defineConfig({
  base: repoBase,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Tartaruga Sea-Bar',
        short_name: 'Tartaruga',
        description: 'Sea-bar frente al faro de Punta Colorada. Un día en el faro.',
        theme_color: '#16213F',
        background_color: '#16213F',
        display: 'standalone',
        start_url: repoBase,
        scope: repoBase,
        lang: 'es',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2,png,webp,avif,wav}'],
        navigateFallback: `${repoBase}index.html`,
      },
    }),
    spaFallback404(),
  ],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'three'
          }
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/leaflet')) return 'map'
          if (id.includes('node_modules/swiper')) return 'swiper'
          if (id.includes('@tsparticles')) return 'particles'
          if (id.includes('lottie-web')) return 'lottie'
          if (id.includes('howler')) return 'howler'
        },
      },
    },
  },
})
