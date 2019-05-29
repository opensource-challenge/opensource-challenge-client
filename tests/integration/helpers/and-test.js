import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Helper | and', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    await render(hbs`{{and 1 1}}`)

    expect(this.$()).to.have.text('true')

    await render(hbs`{{and 0 1}}`)

    expect(this.$()).to.have.text('false')

    await render(hbs`{{and 1 0}}`)

    expect(this.$()).to.have.text('false')

    await render(hbs`{{and 1 1 0}}`)

    expect(this.$()).to.have.text('false')
  })
})
