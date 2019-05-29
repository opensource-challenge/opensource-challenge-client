import PhoenixSocket from 'ember-phoenix/services/phoenix-socket'

export default PhoenixSocket.extend({
  init() {
    this._super(...arguments)
    this.connect()
  },
  connect() {
    let isSecure = window.location.protocol === 'https:'
    let scheme = isSecure ? 'wss' : 'ws'

    return this._super(`${scheme}://${window.location.host}/socket`)
  },
})
