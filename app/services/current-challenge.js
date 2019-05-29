import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  ajax: service(),

  challenge: null,

  async load() {
    if (this.challenge) {
      return this.challenge;
    }

    let res = await this.ajax.request('/challenges/current')

    this.store.pushPayload(res)
    this.set(
      'challenge',
      this.store.peekRecord('challenge', res.data.id),
    )

    return this.challenge;
  },
})
