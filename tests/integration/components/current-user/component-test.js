import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | current user', function() {
  setupComponentTest('current-user', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#current-user}}
    //     template content
    //   {{/current-user}}
    // `);

    this.render(hbs`{{current-user}}`);
    expect(this.$()).to.have.length(1);
  });
});
