import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router/routes'

import { inject } from '@vercel/analytics'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      return { top: 0, left: 0 }
    },
  },
  ({ app, isClient }) => {
    app.use(createPinia())

    if (isClient) {
      inject()
    }
  },
)
