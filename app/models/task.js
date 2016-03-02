import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  project: belongsTo('unfuddleProject'),
  ticket: attr('number'),
  notes: attr('string')
});
