import Ember from 'ember'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

const { Route, inject } = Ember

export default Route.extend(ApplicationRouteMixin, {
  session: inject.service(),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'github')
    },
    logout() {
      this.get('session').invalidate()
    }
  }
})
