export default function() {
  this.urlPrefix = '';
  this.namespace = '/api/v1';
  this.timing = 400;

  this.get('/users')
  this.post('/users')

  this.get('/contributions')
  this.post('/contributions')
}
