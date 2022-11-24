context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://127.0.0.1:4000/')

    cy.contains('[Home Layout]').should('exist')

    cy.findByRole('textbox', { name: /what's your name\?/i })
      .should(($el) => {
        expect(Cypress.dom.isDetached($el)).to.eq(false)
      })
      .should('be.visible')
      .click()
      .type('Vitesse{Enter}')

    cy.waitUntil(() => cy.url().should('eq', 'http://127.0.0.1:4000/users/Vitesse'))

    cy.contains('[Default Layout]').should('exist')

    cy.findByRole('button', {
      name: /back/i,
    })
      .should('be.visible')
      .click()

    cy.waitUntil(() => cy.url().should('eq', 'http://127.0.0.1:4000/'))
  })

  it('markdown', () => {
    cy.findByTestId('about-page')
      .should(($el) => {
        expect(Cypress.dom.isDetached($el)).to.eq(false)
      })
      .should('be.visible')
      .click()

    cy.waitUntil(() => cy.url().should('eq', 'http://127.0.0.1:4000/about'))

    cy.get('pre.language-js').should('exist')
  })
})
