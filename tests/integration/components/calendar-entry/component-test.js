import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('calendar-entry', 'Integration | Component | calendar entry',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#calendar-entry}}
      //     template content
      //   {{/calendar-entry}}
      // `);

      this.render(hbs`{{calendar-entry}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
