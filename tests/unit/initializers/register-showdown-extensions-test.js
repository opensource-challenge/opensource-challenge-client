import Application from '@ember/application';
import { run } from '@ember/runloop';
import { expect } from 'chai'
import { describe, it, beforeEach } from 'mocha'
import RegisterShowdownExtensionsInitializer from 'opensource-challenge-client/initializers/register-showdown-extensions'

describe('Unit | Initializer | register showdown extensions', function() {
  let application

  beforeEach(function() {
    run(function() {
      application = Application.create()
      application.deferReadiness()
    })
  })

  // Replace this with your real tests.
  it('works', function() {
    RegisterShowdownExtensionsInitializer.initialize(application)

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok
  })
})
