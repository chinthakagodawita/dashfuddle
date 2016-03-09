import Ember from 'ember';
import ApplicationAdapter from './application';

const { isEmpty } = Ember;

export default ApplicationAdapter.extend({
  urlForQuery(query/*, modelName*/) {
    let host = this.get('host');
    if (!isEmpty(query.projectId) && Object.keys(query).length === 1) {
      return `${host}/projects/${query.projectId}/tickets`;
    }

    return this._super(...arguments);
  }
});
