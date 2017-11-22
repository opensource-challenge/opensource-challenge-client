import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | application', function() {
  setupTest('route:application', {
    needs: [
      'service:session',
      'service:ajax',
      'service:torii',
      'service:currentUser',
      'service:socket',
    ],
  })

  it('exists', function() {
    let route = this.subject()
    expect(route).to.be.ok
  })
})
