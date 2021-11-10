import { mount } from '@cypress/vue'
import { i18n } from '@/src/modules/i18n'
import TheFooter from '~/components/TheFooter.vue'

describe('TheFooter', () => {
  beforeEach(() => {
    mount(TheFooter, {
      global: {
        plugins: [i18n]
      }
    })
  })

  it('It contains theme toggler', () => {
    cy.get('[data-cy=theme-toggler]').should('have.attr', 'title', 'Toggle dark mode')
  })

  it('It a language selector', () => {
    cy.get('[data-cy=language-selector]').should('have.attr', 'title', 'Change languages')
  })
})
