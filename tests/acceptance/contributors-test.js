import { currentURL, visit } from '@ember/test-helpers'
import $ from 'jquery'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { setupMirage } from 'ember-cli-mirage/test-support'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | contributors', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /contributors', async function() {
    await visit('/contributors')

    expect(currentURL()).to.equal('/contributors')
  })

  it('shows all contributors', async function() {
    this.server.createList('user', 10, {
      picture:
        'https://www.puzzle.ch/wp-content/uploads/2016/03/Senn_Damian-400x300.jpg',
    })

    await visit('/contributors')

    expect($('.contributor')).to.have.length(10)

    percySnapshot('/contributors')
  })
})
