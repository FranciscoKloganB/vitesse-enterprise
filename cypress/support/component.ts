// ***********************************************************
// This example support/e2e.ts is processed before component test files.
// Great place to put global configuration and behavior that modifies Cypress.
// Change the file location or turn it off using 'supportFile' configuration option.
//
// You can use CommonJS and ES2015 import syntax!

import './commands'

// You can read more here: https://on.cypress.io/configuration
// ***********************************************************
import { createPinia, setActivePinia } from 'pinia'

import { mount } from 'cypress/vue'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      mountWithPinia: typeof mount
    }
  }
}

/**
 * Example usage:
 *
 * cy.mount(MyComponent)
 */
Cypress.Commands.add('mount', mount)

/** Example usage:
 *
 * cy.mountWithPinia(MyComponent, { options })
 */
Cypress.Commands.add('mountWithPinia', (component, options) => {
  const piniaStore = {
    global: {
      provide: {
        pinia: setActivePinia(createPinia()),
      },
    },
  }

  return cy.mount(component, {
    ...piniaStore,
    ...options,
  })
})
