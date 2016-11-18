import Ember from 'ember'
import config from './config/environment'
import burgerMenu from 'ember-burger-menu'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  willTransition() {
    let r = this._super(...arguments)

    burgerMenu.set('open', false)

    return r
  }
})

Router.map(function() {
  this.route('about')
  this.route('contributors', function() {})
  this.route('day', { path: '/day/:date' })
  this.route('post-contribution')
})

export default Router
