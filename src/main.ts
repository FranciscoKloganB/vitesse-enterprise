// your custom styles here
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './core/assets/styles/main.css'

import App from './App.vue'
import Previewer from 'virtual:vue-component-preview'
import type { UserModule } from './types'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
// register vue composition api globally
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `**/modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>('./**/modules/*.ts', { eager: true })
    ).forEach((i) => i.install?.(ctx))

    ctx.app.use(Previewer)
  }
)
