declare namespace Cypress {
  interface Chainable {
    /**
     * Perfoms a login at a given URL with the provided email and password.
     * @example cy.login('https://myauth.com/login', 'root', 'secret')
     */
    login(url: string, email: string, password: string): void
  }
}
