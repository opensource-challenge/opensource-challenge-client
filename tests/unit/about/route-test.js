import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | about', function(hooks) {
  setupTest(hooks)

  it('exists', function() {
    let route = this.owner.lookup('route:about')
    expect(route).to.be.ok
  })
})
