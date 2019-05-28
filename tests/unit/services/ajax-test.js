import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | ajax', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    let service = this.owner.lookup('service:ajax')
    expect(service).to.be.ok
  })
})
