import Ember from 'ember'
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii'

const { inject } = Ember

export default ToriiAuthenticator.extend({
  torii: inject.service()
})
