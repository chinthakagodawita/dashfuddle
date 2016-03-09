import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  projectId: belongsTo('unfuddleProject', { inverse: 'tickets' }),
  description: attr('string')
});
