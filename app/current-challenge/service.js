import Ember from 'ember'

const { Service, inject } = Ember

export default Service.extend({
  store: inject.service(),
  ajax: inject.service(),

  challenge: null,

  async load() {
    if (this.get('challenge')) {
      return this.get('challenge')
    }

    let res = await this.get('ajax').request('/challenges/current')

    this.get('store').pushPayload(res)
    this.set('challenge', this.get('store').peekRecord('challenge', res.data.id))

    return this.get('challenge')
  }
})
