import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | login', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /login', async function() {
    await visit('/login')

    expect(currentURL()).to.equal('/login')

    percySnapshot('/login')
  })
})
