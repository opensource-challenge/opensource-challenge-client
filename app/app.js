import RSVP from 'rsvp'
import Application from '@ember/application'
import { computed } from '@ember/object'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const { Promise } = RSVP

window.NativePromise = window.Promise
window.Promise = Promise

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: computed(() => ({
    admin: {
      dependencies: {
        externalRoutes: {
          index: 'index',
        },
        services: ['store', 'session', 'current-user'],
      },
    },
  })),
})

loadInitializers(App, config.modulePrefix)

export default App
