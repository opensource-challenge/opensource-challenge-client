import EmberObject from '@ember/object'
import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contribution calendar', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    this.set(
      'challenge',
      EmberObject.create({
        startsOn: '2016-12-01',
        endsOn: '2016-12-24',
        contributions: [],
      }),
    )
    await render(hbs`{{contribution-calendar challenge=challenge}}`)
    expect(this.$()).to.exist
  })
})
