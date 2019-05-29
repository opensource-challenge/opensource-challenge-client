import { currentURL, visit } from '@ember/test-helpers'
import { afterEach, beforeEach, describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import {
  authenticateSession,
  invalidateSession,
} from 'ember-simple-auth/test-support'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | post contribution', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks)

  it('should redirect to login', async function() {
    await visit('/post-contribution')

    expect(currentURL()).to.equal('/login')
  })

  describe('Logged in', function() {
    beforeEach(async function() {
      this.server.loadFixtures('users')

      await authenticateSession({
        access_token: 'userid:1',
      })
    })

    afterEach(async function() {
      await invalidateSession()
    })

    it('can visit /post-contribution', async function() {
      this.server.loadFixtures('challenges', 'contributions')

      await visit('/post-contribution?date=2018-12-03')

      expect(currentURL()).to.equal('/post-contribution?date=2018-12-03')

      expect(document.querySelector('form')).not.to.be.null

      percySnapshot('/post-contribution')
    })
  })
})
