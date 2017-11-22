import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import {
  authenticateSession,
  invalidateSession,
} from 'opensource-challenge-client/tests/helpers/ember-simple-auth'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | post contribution', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can redirects to login', async function() {
    await visit('/post-contribution')

    expect(currentURL()).to.equal('/login')
  })

  describe('Logged in', function() {
    beforeEach(async function() {
      server.loadFixtures('users')

      await authenticateSession(application, {
        access_token: 'userid:1',
      })
    })

    afterEach(async function() {
      await invalidateSession(application)
    })

    it('can visit /post-contribution', async function() {
      server.loadFixtures('challenges')
      await visit('/post-contribution')

      percySnapshot('/post-contribution')

      expect(currentURL()).to.equal('/post-contribution')
    })
  })
})
