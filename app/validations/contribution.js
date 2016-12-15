import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators'

import validateContributionDate from '../validators/contribution-date'

export default {
  date: [
    validatePresence(true),
    validateLength({ min: 1 }),
    validateFormat({ regex: /\d{4}.\d{2}.\d{2}/ }),
    validateContributionDate()
  ],
  link: [
    validateFormat({ type: 'url', allowBlank: true })
  ],
  description: [
    validatePresence(true)
  ]
}
