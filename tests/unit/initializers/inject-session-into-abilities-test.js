import { expect } from 'chai'
import { describe, it, beforeEach } from 'mocha'
import Ember from 'ember'
import InjectSessionIntoAbilitiesInitializer from 'opensource-challenge-client/initializers/inject-session-into-abilities'

describe('Unit | Initializer | inject session into abilities', function() {
  let application

  beforeEach(function() {
    Ember.run(function() {
      application = Ember.Application.create()
      application.deferReadiness()
    })
  })

  // Replace this with your real tests.
  it('works', function() {
    InjectSessionIntoAbilitiesInitializer.initialize(application)

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok
  })
})
