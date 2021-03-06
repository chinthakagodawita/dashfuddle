import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  statuses: hasMany('unfuddleStatus'),
  tickets: hasMany('unfuddleTicket', { inverse: 'projectId' })
});
