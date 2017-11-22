import RSVP from 'rsvp'
import Ember from 'ember'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const { Promise } = RSVP

window.NativePromise = window.Promise
window.Promise = Promise
const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    admin: {
      dependencies: {
        externalRoutes: {
          index: 'index',
        },
        services: ['store', 'session', 'current-user'],
      },
    },
  },
})

loadInitializers(App, config.modulePrefix)

export default App
