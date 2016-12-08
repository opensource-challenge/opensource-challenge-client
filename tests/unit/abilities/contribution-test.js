/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'ability:contribution',
  'contribution Ability',
  {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var ability = this.subject();
      expect(ability).to.be.ok;
    });
  }
);
