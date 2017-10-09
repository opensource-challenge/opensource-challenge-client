import { expect } from 'chai';
import { it, describe } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | index', function() {
  setupTest('route:index', {
    needs: [ 'service:currentChallenge' ],
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
