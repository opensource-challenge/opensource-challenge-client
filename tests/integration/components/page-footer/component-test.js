import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | page footer', function() {
  setupComponentTest('page-footer', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#page-footer}}
    //     template content
    //   {{/page-footer}}
    // `);

    this.render(hbs`{{page-footer}}`);
    expect(this.$()).to.have.length(1);
  });
});
