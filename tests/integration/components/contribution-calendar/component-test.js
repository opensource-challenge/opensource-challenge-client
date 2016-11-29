import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | contribution calendar', function() {
  setupComponentTest('contribution-calendar', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#contribution-calendar}}
    //     template content
    //   {{/contribution-calendar}}
    // `);

    this.render(hbs`{{contribution-calendar}}`);
    expect(this.$()).to.have.length(1);
  });
});
