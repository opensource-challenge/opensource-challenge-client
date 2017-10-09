import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | edit contribution', function() {
  setupTest('route:edit-contribution', {
    needs: [ 'service:session', 'service:currentUser' ],
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
