import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  willTransition() {
    let r = this._super(...arguments)

    this.set('burgerMenu.open', false)

    return r
  }
})

Router.map(function() {
  this.route('about')
  this.route('contributors', function() {
    this.route('profile', { path: '/:user_id' }, function() {
      this.route('contributions', { path: '/' })
    })
  })
  this.route('day', { path: '/day/:date' }, function() {})
  this.route('post-contribution')
  this.route('edit-contribution', { path: '/contribution/:id' })
  this.route('login')
})

export default Router
