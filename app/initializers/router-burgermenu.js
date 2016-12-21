export function initialize(application) {
  application.inject('router', 'burgerMenu', 'service:burger-menu')
}

export default {
  name: 'router-burgermenu',
  initialize
}
