import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Helper | and', function() {
  setupComponentTest('and', {
    integration: true,
  })

  it('renders', function() {
    this.render(hbs`{{and 1 1}}`)

    expect(this.$()).to.have.text('true')

    this.render(hbs`{{and 0 1}}`)

    expect(this.$()).to.have.text('false')

    this.render(hbs`{{and 1 0}}`)

    expect(this.$()).to.have.text('false')

    this.render(hbs`{{and 1 1 0}}`)

    expect(this.$()).to.have.text('false')
  })
})
