import { Response } from 'ember-cli-mirage'

export default function() {
  this.passthrough('/write-coverage')

  this.urlPrefix = ''
  this.namespace = '/api/v1'
  this.timing = 400

  this.get('/users')
  this.get('/users/current', ({ users }, request) => {
    if (!request.requestHeaders.Authorization) {
      return new Response(401)
    }

    return users.find('1')
  })
  this.post('/users')

  this.post('/tokens', ({ tokens }) => {
    return tokens.find('1')
  })

  this.get('/challenges')
  this.get('/challenges/current', ({ challenges }) => {
    return challenges.find('1')
  })

  this.get('/contributions', ({ contributions }, request) => {
    if (request.queryParams && request.queryParams['filter[date]']) {
      return contributions.where({ date: request.queryParams['filter[date]'] })
    }

    return contributions.all()
  })
  this.post('/contributions')
  this.patch('/contributions/:id')
}
