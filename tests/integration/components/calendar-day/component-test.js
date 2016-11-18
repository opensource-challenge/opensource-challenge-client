import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('calendar-day', 'Integration | Component | calendar day',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#calendar-day}}
      //     template content
      //   {{/calendar-day}}
      // `);

      this.render(hbs`{{calendar-day}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
