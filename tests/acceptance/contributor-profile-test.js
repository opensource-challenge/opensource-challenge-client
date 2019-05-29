import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | contributor profile', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /contributors/2', async function() {
    this.server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/contributors/2')

    expect(currentURL()).to.equal('/contributors/2')

    percySnapshot('/contributor/profile')
  })
})
