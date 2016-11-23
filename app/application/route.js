import Ember from 'ember'
import ApplicationRouteMixin
  from 'ember-simple-auth/mixins/application-route-mixin'

const { Route, inject } = Ember

export default Route.extend(ApplicationRouteMixin, {
  ajax: inject.service(),
  torii: inject.service(),

  _toriiLogin(provider) {
    return this.get('torii')
      .open(provider)
      .then(({ authorizationCode }) => {
        this.session.authenticate('authenticator:osc', {
          provider,
          authorizationCode
        })
      })
  },

  actions: {
    login(user, password) {
      return this.session.authenticate('authenticator:osc', { user, password })
    },
    loginWithGoogle() {
      return this._toriiLogin('google')
    },
    loginWithGithub() {
      return this._toriiLogin('github')
    },
    logout() {
      return this.session.invalidate()
    }
  }
})
