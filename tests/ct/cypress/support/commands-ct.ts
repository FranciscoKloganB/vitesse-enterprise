import { createPinia, setActivePinia } from 'pinia'

/// tests/common/cypress/index.d.ts
import { mount } from '@cypress/vue'

/// <reference types="../../../common/cypress" />

/**
 * For more comprehensive examples of custom commands please read more here:
 * - https://on.cypress.io/custom-commands
 */
Cypress.Commands.add('mountWithPinia', (component, options = {}) => {
  const piniaStore = {
    global: {
      provide: {
        pinia: setActivePinia(createPinia()),
      },
    },
  }
  mount(component, {
    ...piniaStore,
    ...options,
  })
})
