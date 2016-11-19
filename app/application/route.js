import Ember from 'ember'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

const { Route, inject } = Ember

export default Route.extend(ApplicationRouteMixin, {
  session: inject.service(),

  actions: {
    loginWithGoogle() {
      return this.get('session').authenticate('authenticator:torii', 'google')
    },
    loginWithGithub() {
      return this.get('session').authenticate('authenticator:torii', 'github')
    },
    logout() {
      return this.get('session').invalidate()
    }
  }
})
