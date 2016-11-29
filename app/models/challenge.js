import DS from 'ember-data'

const { Model, attr, hasMany } = DS

export default Model.extend({
  contributions: hasMany('contribution'),
  name: attr('string'),
  startsOn: attr('date'),
  endsOn: attr('date')
})
