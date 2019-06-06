import { validatePresence } from 'ember-changeset-validations/validators'

export default {
  name: [validatePresence(true)],
  shortname: [validatePresence(true)],
  startsOn: [validatePresence(true)],
  endsOn: [validatePresence(true)],
}
