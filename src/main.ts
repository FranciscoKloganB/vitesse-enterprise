// your custom styles here
import './core/assets/styles/main.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import App from './App.vue'
// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `**/modules/`
    Object.values(import.meta.globEager('./**/modules/*.ts')).forEach((i) =>
      i.install?.(ctx)
    )
  }
)
