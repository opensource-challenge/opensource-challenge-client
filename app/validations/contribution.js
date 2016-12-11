import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators'

import validateDateRange from '../validators/date-range'
import moment from 'moment'

export default {
  date: [
    validatePresence(true),
    validateLength({ min: 1 }),
    validateFormat({ regex: /\d{4}.\d{2}.\d{2}/ }),
    // TODO use the challenge.startsOn value
    validateDateRange({ min: moment("2016-12-01") , max: moment() })
  ],
  link: [
    validateFormat({ type: 'url', allowBlank: true })
  ],
  description: [
    validatePresence(true)
  ]
}
