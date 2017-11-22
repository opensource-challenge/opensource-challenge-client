import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
  session: service(),
  currentUser: service(),

  beforeModel() {
    if (
      !this.get('session.isAuthenticated') ||
      !this.get('currentUser.user.admin')
    ) {
      this.transitionToExternal('index')

      return
    }
  },
})
