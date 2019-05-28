export default function(server) {
  server.loadFixtures('users')
  server.loadFixtures('challenges')
  server.loadFixtures('contributions')
  server.create('token', {
    userId: 1,
  })
}
