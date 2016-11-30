import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | index', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/')

    percySnapshot('/')

    expect(currentURL()).to.equal('/')
  })
})
