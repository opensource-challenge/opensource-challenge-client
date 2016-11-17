import DS from 'ember-data'

const { Model, attr, belongsTo } = DS

export default Model.extend({
  user: belongsTo('user'),
  date: attr('string'),
  link: attr('string'),
  description: attr('string')
})
