import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router/routes'

// vite-ssg owns app/router creation so each route can be prerendered to static
// HTML (filled markup that Google AND AI crawlers read without running JS),
// then hydrated on the client for full interactivity.
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      return { top: 0, left: 0 }
    },
  },
  ({ app }) => {
    app.use(createPinia())
  },
)
