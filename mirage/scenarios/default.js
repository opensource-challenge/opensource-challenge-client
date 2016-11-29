export default function(server) {
  server.create('challenge', {
    name: 'Thömus OpenSource Advent Challenge',
    startsOn: '2016-12-01',
    endsOn: '2016-12-24'
  })
  server.loadFixtures('users')
  server.loadFixtures('contributions')
  server.create('token', {
    userId: 1
  })
}
