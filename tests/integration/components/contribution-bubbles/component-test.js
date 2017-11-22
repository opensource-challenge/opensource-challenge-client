import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contribution bubbles', function() {
  setupComponentTest('contribution-bubbles', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#contribution-bubbles}}
    //     template content
    //   {{/contribution-bubbles}}
    // `);

    this.render(hbs`{{contribution-bubbles}}`)
    expect(this.$()).to.exist
  })
})
