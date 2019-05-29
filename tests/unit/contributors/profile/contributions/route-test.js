import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | contributors/profile/contributions', function(hooks) {
  setupTest(hooks)

  it('exists', function() {
    let route = this.owner.lookup('route:contributors/profile/contributions')
    expect(route).to.be.ok
  })
})
