export default function(server) {
  server.loadFixtures('users')
  server.loadFixtures('contributions')
  server.create('token', {
    userId: 1
  })
}
