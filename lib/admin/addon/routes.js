import buildRoutes from 'ember-engines/routes'

export default buildRoutes(function() {
  this.route('challenges')
  this.route('create-challenge', { path: '/challenges/new' })
  this.route('edit-challenge', { path: '/challenges/:id' })
  this.route('users')
  this.route('edit-user', { path: '/users/:id' })
})
