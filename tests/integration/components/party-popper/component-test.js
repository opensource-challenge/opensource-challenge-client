import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | party popper', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#party-popper}}
    //     template content
    //   {{/party-popper}}
    // `);

    await render(hbs`{{party-popper}}`)
    expect(this.$()).to.exist
  })
})
