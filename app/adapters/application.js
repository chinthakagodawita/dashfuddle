import DS from 'ember-data';
import Ember from 'ember';

const { inject, computed } = Ember;

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  session: inject.service('session'),
  sessionData: computed.alias('session.data.authenticated'),
  host: computed.alias('sessionData.host'),
  headers: computed('sessionData.username', 'sessionData.password', function() {
    let user = this.get('sessionData.username');
    let pass = this.get('sessionData.password');
    return {
      Authorization: `Basic ` + btoa(`${user}:${pass}`),
      Accept: 'application/json'
    };
  })
});
