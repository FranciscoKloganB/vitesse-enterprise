context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:4000/')

    cy.contains('[Home Layout]').should('exist')

    cy.get('#input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', 'http://localhost:4000/user/greet/Vitesse')

    cy.contains('[Default Layout]').should('exist')

    cy.get('.btn').click().url().should('eq', 'http://localhost:4000/')
  })

  it('markdown', () => {
    cy.get('[title="About"]').click().url().should('eq', 'http://localhost:4000/about')

    cy.get('pre.language-js').should('exist')
  })
})
