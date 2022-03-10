/// <reference types="../../../common/cypress" />

/**
 * For more comprehensive examples of custom commands please read more here:
 * - https://on.cypress.io/custom-commands
 */
Cypress.Commands.add('login', (url, email, password) => {
  cy.visit(url)
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
  cy.get('input[type=submit]').click()
})
