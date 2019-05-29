import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | socket', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    let service = this.owner.lookup('service:socket')
    expect(service).to.be.ok
  })
})
