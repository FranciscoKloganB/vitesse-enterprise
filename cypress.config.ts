import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:4000',
    chromeWebSecurity: false,
    fileServerFolder: 'dist',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
  projectId: 'vitesse-enterprise',
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: true,
})
