import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | page header', function() {
  setupComponentTest('page-header', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#page-header}}
    //     template content
    //   {{/page-header}}
    // `);

    this.render(hbs`{{page-header}}`)
    expect(this.$()).to.exist
  })
})
