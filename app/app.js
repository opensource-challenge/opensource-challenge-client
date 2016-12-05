import RSVP from 'rsvp'
import Ember from 'ember'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const { Promise } = RSVP

window.NativePromise = window.Promise
window.Promise = Promise

let App

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
})

loadInitializers(App, config.modulePrefix)

Ember.Route.reopen({
  className() {
    return `page-${Ember.String.dasherize(this.routeName.replace(/\./g, '-'))}`
  },
  activate() {
    let applicationView = document.body.querySelector('body > .ember-view')

    if (applicationView) {
      applicationView.className = `${this.className()} ember-view`
    }
  }
})

export default App
