import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contributor list', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    await render(hbs`{{contributor-list}}`)

    expect(this.$()).to.exist
  })
})
