import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | date field', function() {
  setupComponentTest('date-field', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#date-field}}
    //     template content
    //   {{/date-field}}
    // `);

    this.render(hbs`{{date-field}}`)
    expect(this.$()).to.exist
  })
})
