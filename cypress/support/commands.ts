// ***********************************************
// This serves to add custom functionality to Cypress and can be imported both
// in `components.ts` and `e2e.ts` support files.
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, opt) => {  })
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {  })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, opt) => {  })
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, opt) => {  })
//
// For more comprehensive examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import '@testing-library/cypress/add-commands'
// https://www.npmjs.com/package/cypress-wait-until
import 'cypress-wait-until'

declare global {
  namespace Cypress {
    interface Chainable {
      visit(
        originalFn: CommandOriginalFn<any>,
        url: string,
        options: Partial<VisitOptions>
      ): Chainable<Element>
      login(email: string, password: string): Chainable<void>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    }
  }
}
