import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | current user', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    let service = this.owner.lookup('service:current-user')
    expect(service).to.be.ok
  })
})
