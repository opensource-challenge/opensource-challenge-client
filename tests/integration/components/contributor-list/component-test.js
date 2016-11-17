import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('contributor-list', 'Integration | Component | contributor list',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#contributor-list}}
      //     template content
      //   {{/contributor-list}}
      // `);

      this.render(hbs`{{contributor-list}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
