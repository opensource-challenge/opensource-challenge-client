import { expect } from 'chai';

import { describe, it } from 'mocha';
import { or } from 'opensource-challenge-client/helpers/or';

describe('Unit | Helper | or', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = or([ 42, 42 ]);
    expect(result).to.be.ok;
  });
});

