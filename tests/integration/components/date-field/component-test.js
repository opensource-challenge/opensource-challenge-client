import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | date field', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#date-field}}
    //     template content
    //   {{/date-field}}
    // `);

    await render(hbs`{{date-field}}`)
    expect(this.$()).to.exist
  })
})
