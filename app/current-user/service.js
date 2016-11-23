import Ember from 'ember'
import RSVP from 'rsvp'

const { Service, inject } = Ember
const { Promise } = RSVP

export default Service.extend({
  session: inject.service(),
  store: inject.service(),

  load() {
    return new Promise((resolve, reject) => {
      let jwt = this.get('session.data.authenticated.access_token')

      if (!jwt) {
        resolve()
        return
      }

      let data = JSON.parse(atob(jwt.split('.')[1]))
      let userId = /User:(\d+)/.exec(data.sub)[1]

      this.get('store').find('user', userId)
        .then(user => this.set('user', user))
        .then(resolve)
        .catch(reject)
    })
  }
})
