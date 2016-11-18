import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('post-contribution-form', 'Integration | Component | post contribution form',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#post-contribution-form}}
      //     template content
      //   {{/post-contribution-form}}
      // `);

      this.render(hbs`{{post-contribution-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
