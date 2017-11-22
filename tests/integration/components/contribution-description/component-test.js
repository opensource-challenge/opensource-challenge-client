import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contribution description', function() {
  setupComponentTest('contribution-description', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#contribution-description}}
    //     template content
    //   {{/contribution-description}}
    // `);

    this.render(hbs`{{contribution-description}}`)
    expect(this.$()).to.exist
  })
})
