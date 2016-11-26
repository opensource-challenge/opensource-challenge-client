import Ember from 'ember'
import RSVP from 'rsvp'

const { Service, inject } = Ember
const { Promise } = RSVP

export default Service.extend({
  session: inject.service(),
  store: inject.service(),
  ajax: inject.service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('ajax')
        .request('/users/current')
        .then(res => this.get('store').pushPayload(res))
        .then(user => this.set('user', user))
    }

    return Promise.resolve()
  }
})
