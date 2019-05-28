export default function(server) {
  server.loadFixtures('challenge')
  server.loadFixtures('user')
  server.loadFixtures('contribution')
  server.create('token', {
    userId: 1,
  })
}
