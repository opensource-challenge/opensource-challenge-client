import buildRoutes from 'ember-engines/routes'

export default buildRoutes(function() {
  this.route('challenges')
  this.route('users')
  this.route('edit-user', { path: '/users/:id' })
})
