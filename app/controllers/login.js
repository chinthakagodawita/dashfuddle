import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  username: null,
  password: null,
  errorMessage: null,
  session: inject.service('session'),
  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:unfuddle', username, password).catch((reason) => {
        // this.set('errorMessage', reason.error || reason);
        this.set('errorMessage', 'Oh no, something bad has happened!');
      });
    }
  }
});
