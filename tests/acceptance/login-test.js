import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | login', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /login', async function() {
    await visit('/login')

    percySnapshot('/login')

    expect(currentURL()).to.equal('/login')
  })
})
