import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | current user', function() {
  setupTest('service:current-user', {
    needs: ['service:session', 'service:ajax'],
  })

  // Replace this with your real tests.
  it('exists', function() {
    let service = this.subject()
    expect(service).to.be.ok
  })
})
