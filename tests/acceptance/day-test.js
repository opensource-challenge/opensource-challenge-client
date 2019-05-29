import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | day', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /day/2015-12-06', async function() {
    this.server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/day/2015-12-06')

    expect(currentURL()).to.equal('/day/2015-12-06')

    percySnapshot('/day/2015-12-06')
  })
})
