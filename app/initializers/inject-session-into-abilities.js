export function initialize(app) {
  app.inject('ability', 'currentUser', 'service:current-user')
}

export default {
  name: 'inject-session-into-abilities',
  initialize
}
