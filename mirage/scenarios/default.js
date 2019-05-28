export default function(server) {
  server.loadFixtures('challenges')
  server.loadFixtures('users')
  server.loadFixtures('contributions')
  server.create('token', {
    userId: 1,
  })
}
