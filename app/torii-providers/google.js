import GoogleOauth2 from 'torii/providers/google-oauth2'

export default GoogleOauth2.extend({
  fetch(data) {
    return data
  },
})
