import { describe, expect, it, test } from 'vitest'

describe('tests', () => {
  it('should work', () => {
    // expectation with mocha-chai (BDD) semantics
    expect(1 + 1).to.equal(2)
    // expectation using assert(expression) with pure-chai semantics (not-chainable)
    assert(true, "'true' is a truthy value")
  })

  test('should also work', () => {
    // expectation with jest semantics
    expect(1 - 1).toEqual(0)
  })
})
