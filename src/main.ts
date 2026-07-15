import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router/routes'

import { inject } from '@vercel/analytics'

import AOS from 'aos'
import 'aos/dist/aos.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      return { top: 0, left: 0 }
    },
  },
  ({ app, router, isClient }) => {
    app.use(createPinia())

    if (isClient) {
      inject()

      router.isReady().then(() => {
        AOS.init({
          duration: 800,
          once: true,
        })

        router.afterEach(() => {
          setTimeout(() => {
            AOS.refresh()
          }, 100)
        })
      })
    }
  },
)
