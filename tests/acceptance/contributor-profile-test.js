import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | contributor profile', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /contributors/2', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/contributors/2')

    percySnapshot('/contributor/profile')

    expect(currentURL()).to.equal('/contributors/2')
  })
})
