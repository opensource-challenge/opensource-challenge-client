import { expect } from 'chai'

import { describe, it } from 'mocha'
import { takeFirst } from 'opensource-challenge-client/helpers/take-first'

describe('Unit | Helper | take first', function() {
  it('works', function() {
    let result = takeFirst([ [ 23, 42 ] ])
    expect(result).to.equal(23)
  })

  it('works with null/undefined', function() {
    let result

    result = takeFirst([ null ])
    expect(result).to.equal(null)
    result = takeFirst([ undefined ])
    expect(result).to.equal(null)
  })
})
