import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | error', function(hooks) {
  setupTest(hooks)

  it('exists', function() {
    let route = this.owner.lookup('route:error')
    expect(route).to.be.ok
  })
})
