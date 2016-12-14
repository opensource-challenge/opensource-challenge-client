import { expect } from 'chai';
import { describe, it } from 'mocha';
import validateDateRange from 'opensource-challenge-client/validators/date-range'

describe('Unit | Validator | date-range', function() {
    it('it exists', function() {
      expect(validateDateRange).to.be.ok
    })
  }
)
