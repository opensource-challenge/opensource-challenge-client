import { expect } from 'chai'
import { describe, it } from 'mocha'
import validateDateRange from 'opensource-challenge-client/validators/date-range'

import moment from 'moment'

describe('Unit | Validator | date-range', function() {
  it('it exists', function() {
    expect(validateDateRange).to.be.ok
  })

  it('validates correct date ranges', function() {
    let validator = validateDateRange({
      min: moment('2016-08-14'),
      max: moment('2016-08-16'),
    })
    expect(validator('date', moment('2016-08-15'))).to.be.true
    expect(validator('date', moment('2016-08-14'))).to.be.true
    expect(validator('date', moment('2016-08-16'))).to.be.true
  })

  it('invalidates incorrect date ranges', function() {
    let validator = validateDateRange({
      min: moment('2016-08-14'),
      max: moment('2016-08-16'),
    })
    expect(validator('date', moment('2016-08-13'))).to.be.false
    expect(validator('date', moment('2016-08-17'))).to.be.false
  })
})
