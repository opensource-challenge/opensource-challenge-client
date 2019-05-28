import { run } from '@ember/runloop';
import { isEmpty } from '@ember/utils';
import RSVP from 'rsvp'
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant'

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: '/api/v1/token',

  authenticate({
    username,
    password,
    authorizationCode,
    provider = 'password',
  }) {
    if (provider === 'password') {
      return this._super(username, password)
    }

    return new RSVP.Promise((resolve, reject) => {
      let data = { grant_type: provider, authorizationCode }
      let serverTokenEndpoint = this.serverTokenEndpoint

      this.makeRequest(serverTokenEndpoint, data).then(
        response => {
          run(() => {
            if (!response.access_token) {
              reject('access_token is missing in server response')
            }

            const expiresAt = this._absolutizeExpirationTime(
              response['expires_in'],
            )
            this._scheduleAccessTokenRefresh(
              response['expires_in'],
              expiresAt,
              response['refresh_token'],
            )
            if (!isEmpty(expiresAt)) {
              response = Object.assign(response, { expires_at: expiresAt })
            }

            resolve(response)
          })
        },
        _xhr => {
          run(null, reject, this.rejectWithResponse)
        },
      )
    });
  },
})
