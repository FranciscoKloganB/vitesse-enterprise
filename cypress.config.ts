import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    supportFile: './cypress/support/commands.ts',
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:4000',
    chromeWebSecurity: false,
    fileServerFolder: 'dist',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    supportFile: './cypress/support/commands.ts',
  },
  projectId: 'vitesse-enterprise',
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: true,
})
