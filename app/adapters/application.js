import DS from 'ember-data';
import Ember from 'ember';

const { inject, computed } = Ember;

export default DS.RESTAdapter.extend({
  session: inject.service('session'),
  protocol: computed.alias('session.protocol'),
  subdomain: computed.alias('session.subdomain'),
  namespace: 'api/v1',
  host: computed('protocol', 'subdomain', () => {
    let protocol = this.get('protocol');
    let subdomain = this.get('subdomain');
    return `${protocol}://${subdomain}.unfuddle.com`;
  }),
  headers: {
    Authorization: `Basic ` + btoa('username:password'),
    Accept: 'application/json'
  }
});
