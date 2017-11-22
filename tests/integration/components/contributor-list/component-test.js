import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contributor list', function() {
  setupComponentTest('contributor-list', {
    integration: true,
  })

  it('renders', function() {
    this.render(hbs`{{contributor-list}}`)

    expect(this.$()).to.exist
  })
})
