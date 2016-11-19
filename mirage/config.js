export default function() {
  this.urlPrefix = ''
  this.namespace = '/api/v1'
  this.timing = 400

  this.get('/users')
  this.post('/users')

  this.get('/contributions', ({ contributions }, request) => {
    if (request.queryParams && request.queryParams['filter[date]']) {
      return contributions.where({ date: request.queryParams['filter[date]'] })
    }

    return contributions.all()
  })
  this.post('/contributions')
  this.patch('/contributions/:id')
}
