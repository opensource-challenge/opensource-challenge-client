import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | about', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /about', async function() {
    await visit('/about')

    percySnapshot('/about')

    expect(currentURL()).to.equal('/about')
  })
})
