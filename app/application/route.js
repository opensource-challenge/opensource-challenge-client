import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'
import LoginValidations from '../validations/login'

export default Route.extend(ApplicationRouteMixin, {
  LoginValidations,

  ajax: service(),
  torii: service(),
  currentUser: service(),
  socket: service(),

  beforeModel() {
    return this._loadCurrentUser()
  },

  afterModel() {
    this.socket.on('open', () => {
      let channel = this.socket.joinChannel('room:contributions')

      channel.on('new:contribution', payload => {
        this.store.pushPayload(payload)
      })
    })
  },

  sessionAuthenticated() {
    this._super(...arguments)

    this._loadCurrentUser()
  },

  async _loadCurrentUser() {
    try {
      return await this.currentUser.load()
    } catch (err) {
      this.session.invalidate()
    }
  },

  async _toriiLogin(provider) {
    try {
      let { authorizationCode } = await this.torii.open(provider)

      return await this.session.authenticate('authenticator:osc', {
        provider,
        authorizationCode,
      })
    } catch (err) {
      this.transitionTo('error', err)
    }
  },

  actions: {
    async login(data) {
      await data.validate()

      if (data.get('isValid')) {
        return await this.session.authenticate('authenticator:osc', {
          username: data.get('email'),
          password: data.get('password'),
        })
      }
    },
    loginWithGoogle() {
      return this._toriiLogin('google')
    },
    loginWithGithub() {
      return this._toriiLogin('github')
    },
    logout() {
      return this.session.invalidate()
    },
  },
})
