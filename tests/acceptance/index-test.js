import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | index', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /', async function() {
    this.server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/')

    expect(currentURL()).to.equal('/')

    percySnapshot('/')
  })
})
