/// <reference types="vite-ssg" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import { articleSlugs } from './src/data/blog'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // vite-ssg: expand the dynamic /blog/:slug route into one static page per article.
  ssgOptions: {
    formatting: 'minify',
    includedRoutes(paths) {
      const staticPaths = paths.filter((p) => !p.includes(':'))
      const blogPaths = articleSlugs.map((slug) => `/blog/${slug}`)
      return [...staticPaths, ...blogPaths]
    },
  },
})
