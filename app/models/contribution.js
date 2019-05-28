import DS from 'ember-data'

const { Model, attr, belongsTo } = DS

export default Model.extend({
  user: belongsTo('user', { async: true }),
  challenge: belongsTo('challenge', { async: true }),
  title: attr('string'),
  date: attr('string'),
  link: attr('string'),
  description: attr('string'),
  insertedAt: attr('date'),
})
