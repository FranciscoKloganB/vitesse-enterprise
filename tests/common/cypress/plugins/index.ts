import { startDevServer } from '@cypress/vite-dev-server'

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  on('dev-server:start', async (options) => startDevServer({ options }))

  return config
}
