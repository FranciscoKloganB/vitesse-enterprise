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
    cy.get('[data-test-id=theme-toggler]').should(
      'have.attr',
      'title',
      'Toggle dark mode'
    )
  })

  it('It a language selector', () => {
    cy.get('[data-test-id=language-selector]').should(
      'have.attr',
      'title',
      'Change languages'
    )
  })
})
