import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | latest contribution', function() {
  setupComponentTest('latest-contribution', {
    integration: true,
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#latest-contribution}}
    //     template content
    //   {{/latest-contribution}}
    // `);

    this.render(hbs`{{latest-contribution}}`)
    expect(this.$()).to.exist
  })
})
