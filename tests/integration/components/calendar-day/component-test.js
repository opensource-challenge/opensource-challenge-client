import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | calendar day', function() {
  setupComponentTest('calendar-day', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#calendar-day}}
    //     template content
    //   {{/calendar-day}}
    // `);

    this.render(hbs`{{calendar-day}}`)
    expect(this.$()).to.exist
  })
})
