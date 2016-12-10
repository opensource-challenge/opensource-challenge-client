import { Response } from 'ember-cli-mirage'

export default function() {
  this.passthrough('/write-coverage')

  this.urlPrefix = ''
  this.namespace = '/api/v1'
  this.timing = 400

  this.get('/users')
  this.get('/users/current', ({ users }, request) => {
    let token = request.requestHeaders.Authorization

    if (!token) {
      return new Response(401)
    }

    // Should use JWT instead of this custom thing
    let match = /Bearer userid:(\d+)/.exec(token)

    if (match) {
      return users.find(match[1])
    }

    return users.find('1')
  })
  this.get('/users/:id')
  this.post('/users')

  this.post('/token', ({ tokens }) => {
    return { access_token: tokens.first().attrs.accessToken }
  })

  this.get('/challenges')
  this.get('/challenges/current', ({ challenges }) => {
    return challenges.find('1')
  })
  this.get('/challenges/:id')

  this.get('/contributions', ({ contributions }, request) => {
    if (request.queryParams && request.queryParams['filter[date]']) {
      return contributions.where({ date: request.queryParams['filter[date]'] })
    }

    return contributions.all()
  })
  this.post('/contributions')
  this.get('/contributions/:id')
  this.patch('/contributions/:id')
}
