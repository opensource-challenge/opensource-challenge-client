import Ember from 'ember'
import ApplicationRouteMixin
  from 'ember-simple-auth/mixins/application-route-mixin'

const { Route } = Ember

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    loginWithGoogle() {
      return this.session.authenticate('authenticator:torii', 'google')
    },
    loginWithGithub() {
      return this.session.authenticate('authenticator:torii', 'github')
    },
    logout() {
      return this.session.invalidate()
    }
  }
})
