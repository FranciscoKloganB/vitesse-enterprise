import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
