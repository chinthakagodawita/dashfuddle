import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  protocol: null,
  subdomain: null,
  username: null,
  password: null,
  errorMessage: null,
  session: inject.service('session'),
  actions: {
    authenticate() {
      let { protocol, subdomain, username, password } = this.getProperties('protocol', 'subdomain', 'username', 'password');
      this.get('session').authenticate('authenticator:unfuddle', protocol, subdomain, username, password).catch((reason) => {
        this.set('errorMessage', reason);
      });
    }
  }
});
