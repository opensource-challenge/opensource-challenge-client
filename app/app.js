import RSVP from 'rsvp'
import Application from '@ember/application'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

window.NativePromise = window.Promise
window.Promise = RSVP.Promise

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  get engines() {
    return {
      admin: {
        dependencies: {
          externalRoutes: {
            index: 'index',
          },
          services: ['store', 'session', 'current-user'],
        },
      },
    }
  },
})

loadInitializers(App, config.modulePrefix)

export default App
