import Ember from 'ember'
import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

const { $ } = Ember

describe('Acceptance | contributors', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /contributors', async function() {
    await visit('/contributors')

    expect(currentURL()).to.equal('/contributors')
  })

  it('shows all contributors', async function() {
    server.createList('user', 10)

    await visit('/contributors')

    expect($('.contributor').length).to.equal(10)
  })
})
