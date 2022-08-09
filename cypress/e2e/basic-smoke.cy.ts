context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://127.0.0.1:4000/')

    cy.contains('[Home Layout]').should('exist')

    cy.get('#input')
      .type('john_doe{Enter}')
      .url()
      .should('eq', 'http://127.0.0.1:4000/users/john_doe')

    cy.contains('[Default Layout]').should('exist')

    cy.get('[btn]').click().url().should('eq', 'http://127.0.0.1:4000/')
  })

  it('markdown', () => {
    cy.get('[title="About"]')
      .should('be.visible')
      .focus()
      .click({ force: true })
      .url()
      .should('eq', 'http://127.0.0.1:4000/about')

    cy.get('pre.language-js').should('exist')
  })
})
