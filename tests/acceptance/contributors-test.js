import Ember from 'ember'
import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { percySnapshot } from 'ember-percy'

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
    server.createList('user', 10, {
      picture: 'https://www.puzzle.ch/wp-content/uploads/2016/03/Senn_Damian-400x300.jpg'
    })

    await visit('/contributors')

    percySnapshot('/contributors')

    expect($('.contributor').length).to.equal(10)
  })
})
