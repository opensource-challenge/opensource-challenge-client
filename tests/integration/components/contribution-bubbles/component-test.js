import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('contribution-bubbles', 'Integration | Component | contribution bubbles',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#contribution-bubbles}}
      //     template content
      //   {{/contribution-bubbles}}
      // `);

      this.render(hbs`{{contribution-bubbles}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
