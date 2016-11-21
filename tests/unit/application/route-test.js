import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('route:application', 'Unit | Route | application',
  {
    needs: [ 'service:session' ]
  },
  function() {
    it('exists', function() {
      let route = this.subject();
      expect(route).to.be.ok;
    });
  }
);
