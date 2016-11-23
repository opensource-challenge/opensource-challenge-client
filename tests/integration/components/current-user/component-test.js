import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('current-user', 'Integration | Component | current user',
  {
    integration: true
  },
  function() {
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
  }
);
