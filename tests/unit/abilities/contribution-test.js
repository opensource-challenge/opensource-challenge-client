/* jshint expr:true */
import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('contribution Ability', function() {
  setupTest('ability:contribution', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  it('exists', function() {
    var ability = this.subject();
    expect(ability).to.be.ok;
  });
});
