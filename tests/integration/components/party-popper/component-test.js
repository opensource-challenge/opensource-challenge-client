import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | party popper', function() {
  setupComponentTest('party-popper', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#party-popper}}
    //     template content
    //   {{/party-popper}}
    // `);

    this.render(hbs`{{party-popper}}`)
    expect(this.$()).to.exist
  })
})
