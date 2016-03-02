import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    statuses: { embedded: 'always' }
  }
});
