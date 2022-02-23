/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Mounts a component with access to a Pinia Store
     *
     * @example cy.mountWithPinia(TheNavbar)
     * @example cy.mountWithPinia(TheNavbar, { propsData: { msg: 'hello world' } })
     */
    mountWithPinia(component: any, options?: any): void
  }
}
