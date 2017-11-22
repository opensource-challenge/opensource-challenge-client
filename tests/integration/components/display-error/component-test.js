import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | display error', function() {
  setupComponentTest('display-error', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#display-error}}
    //     template content
    //   {{/display-error}}
    // `);

    this.render(hbs`{{display-error}}`);
    expect(this.$()).to.exist;
  });
});
