import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | current challenge', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    let service = this.owner.lookup('service:current-challenge')
    expect(service).to.be.ok
  })
})
