import { expect } from 'chai'

import { describe, it } from 'mocha'
import { or } from 'opensource-challenge-client/helpers/or'

describe('Unit | Helper | or', function() {
  it('works', function() {
    expect(or([42, 42])).to.equal(true)
    expect(or([false, 42, false])).to.equal(true)
    expect(or([true, 42])).to.equal(true)
    expect(or([null, undefined, 1])).to.equal(true)
  })
})
