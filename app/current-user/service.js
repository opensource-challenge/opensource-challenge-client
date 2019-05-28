import Service, { inject as service } from '@ember/service'

export default Service.extend({
  session: service(),
  store: service(),
  ajax: service(),

  async load() {
    if (this.get('session.isAuthenticated')) {
      try {
        let res = await this.ajax.request('/users/current')

        this.store.pushPayload(res)
        this.set('user', this.store.peekRecord('user', res.data.id))
      } catch (e) {
        this.session.invalidate()
        throw e
      }
    }
  },
})
