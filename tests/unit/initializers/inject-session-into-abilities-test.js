import Application from '@ember/application';
import { run } from '@ember/runloop';
import { expect } from 'chai'
import { describe, it, beforeEach } from 'mocha'
import InjectSessionIntoAbilitiesInitializer from 'opensource-challenge-client/initializers/inject-session-into-abilities'

describe('Unit | Initializer | inject session into abilities', function() {
  let application

  beforeEach(function() {
    run(function() {
      application = Application.create()
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
