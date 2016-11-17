import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('contribution-calendar', 'Integration | Component | contribution calendar',
  {
    integration: true
  },
  function() {
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
  }
);
