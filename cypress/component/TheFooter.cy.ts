import TheFooter from '~/core/components/TheFooter.vue'
import { i18n } from '~/core/modules/i18n'

describe('TheFooter.cy.ts', () => {
  beforeEach(() => {
    cy.mountWithPinia(TheFooter, {
      global: {
        plugins: [i18n],
      },
    })
  })

  it('It contains theme toggler', () => {
    cy.findByTestId('theme-toggler').should('have.attr', 'title', 'Toggle dark mode')
  })

  it('It contains language selector', () => {
    cy.findByTestId('language-selector').should(
      'have.attr',
      'title',
      'Change languages'
    )
  })
})
