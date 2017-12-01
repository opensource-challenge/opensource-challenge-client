import {
  validatePresence,
  validateFormat,
} from 'ember-changeset-validations/validators'

export default {
  name: [validatePresence(true)],
  email: [validatePresence(true), validateFormat({ type: 'email' })],
}
