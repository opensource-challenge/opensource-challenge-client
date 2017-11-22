import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | post contribution', function() {
  setupTest('route:post-contribution', {
    needs: [
      'service:session',
      'service:currentUser',
      'service:currentChallenge',
    ],
  })

  it('exists', function() {
    let route = this.subject()
    expect(route).to.be.ok
  })
})
