import buildRoutes from 'ember-engines/routes'

export default buildRoutes(function() {
  this.route('challenges')
  this.route('create-challenge', { path: '/challenges/new' })
  this.route('challenge', { path: '/challenges/:id' }, function() {
    this.route('edit')
  })
  this.route('users')
  this.route('edit-user', { path: '/users/:id' })
})
