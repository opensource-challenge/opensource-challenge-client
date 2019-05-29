import { getOwner } from '@ember/application'

export function initialize(app) {
  let i18n = null

  try {
    i18n = getOwner(app).lookup('service:i18n')
  } catch (e) {
    try {
      i18n = app.__container__.lookup('service:i18n')
    } catch (e) {
      return
    }
  }

  if (i18n) {
    app.inject('component', 'i18n', 'service:i18n')
  }
}

export default {
  name: 'ember-form-for-i18n',
  initialize,
}
