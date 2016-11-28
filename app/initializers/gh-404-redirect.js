export function initialize() {
  let redirect = sessionStorage.redirect

  sessionStorage.redirect = ''

  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect)
  }
}

export default {
  name: 'gh-404-redirect',
  initialize
}
