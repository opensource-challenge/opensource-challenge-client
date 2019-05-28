import EmberObject from '@ember/object';
import { expect } from 'chai'
import { describe, it } from 'mocha'
import validateContributionDate from 'opensource-challenge-client/validators/contribution-date'

import moment from 'moment'

describe('Unit | Validator | contribution-date', function() {
  it('it exists', function() {
    expect(validateContributionDate).to.be.ok
  })

  it('validates correct dates', function() {
    let model = EmberObject.create({
      challenge: {
        startsOn: moment().subtract(2, 'days'),
        endsOn: moment().add(2, 'days'),
      },
    })

    let validator = validateContributionDate()

    expect(validator('key', moment(), null, null, model)).to.be.true
    expect(validator('key', moment().subtract(1, 'days'), null, null, model))
      .to.be.true
    expect(validator('key', moment().subtract(2, 'days'), null, null, model))
      .to.be.true
  })

  it('invalidates incorrect dates', function() {
    let model = EmberObject.create({
      challenge: {
        startsOn: moment().subtract(2, 'days'),
        endsOn: moment().add(2, 'days'),
      },
    })

    let validator = validateContributionDate()

    expect(validator('key', moment().add(1, 'days'), null, null, model)).to.be
      .false
    expect(validator('key', moment().subtract(3, 'days'), null, null, model))
      .to.be.false
  })
})
