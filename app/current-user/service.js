import Ember from 'ember'
import RSVP from 'rsvp'

const { Service, inject } = Ember
const { Promise } = RSVP

export default Service.extend({
  session: inject.service(),
  store: inject.service(),
  ajax: inject.service(),

  async load() {
    if (this.get('session.isAuthenticated')) {
      let res = await this.get('ajax').request('/users/current')

      this.get('store').pushPayload(res)
      this.set('user', this.get('store').peekRecord('user', res.data.id))
    }
  }
})
