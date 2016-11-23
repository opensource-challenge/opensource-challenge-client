import Ember from 'ember'
import ApplicationRouteMixin
  from 'ember-simple-auth/mixins/application-route-mixin'

const { Route, inject } = Ember

export default Route.extend(ApplicationRouteMixin, {
  ajax: inject.service(),
  torii: inject.service(),
  currentUser: inject.service(),

  beforeModel() {
    return this._loadCurrentUser()
  },

  sessionAuthenticated() {
    this._super(...arguments)

    this._loadCurrentUser()
      .catch(() =>
        this.session.invalidate()
      )
  },

  _loadCurrentUser() {
    return this.get('currentUser').load()
  },

  _toriiLogin(provider) {
    return this.get('torii')
      .open(provider)
      .then(({ authorizationCode }) => {
        return this.session.authenticate('authenticator:osc', {
          provider,
          authorizationCode
        })
      })
      .catch(err => this.transitionTo('error', err))
  },

  actions: {
    login({ email, password }) {
      return this.session.authenticate('authenticator:osc', {
        username: email,
        password
      })
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
