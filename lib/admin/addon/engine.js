import { computed } from '@ember/object'
import Engine from 'ember-engines/engine'
import loadInitializers from 'ember-load-initializers'
import Resolver from './resolver'
import config from './config/environment'

const { modulePrefix } = config

const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: computed(() => ({
    externalRoutes: ['index'],
    services: ['store', 'session', 'current-user'],
  })),
})

loadInitializers(Eng, modulePrefix)

export default Eng
