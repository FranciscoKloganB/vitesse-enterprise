import { merge } from 'lodash'
import { mount } from '@cypress/vue'
import { setActivePinia, createPinia } from 'pinia'

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
  mount(component, merge(piniaStore, options))
})
