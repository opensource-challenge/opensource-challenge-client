import Ember from 'ember'

const { Service, inject } = Ember

export default Service.extend({
  session: inject.service(),
  store: inject.service(),
  ajax: inject.service(),

  async load() {
    if (this.get('session.isAuthenticated')) {
      try {
        let res = await this.get('ajax').request('/users/current')

        this.get('store').pushPayload(res)
        this.set('user', this.get('store').peekRecord('user', res.data.id))
      }
      catch (e) {
        this.get('session').invalidate()
      }
    }
  }
})
