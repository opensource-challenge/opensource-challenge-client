import { expect } from 'chai';
import { describe, it } from 'mocha';
import validateContributionDate from 'opensource-challenge-client/validators/contribution-date';

describe('Unit | Validator | contribution-date', function() {
    it('it exists', function() {
      expect(validateContributionDate).to.be.ok
    })
  }
)
