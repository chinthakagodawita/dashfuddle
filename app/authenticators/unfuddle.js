import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
  },

  authenticate(username, password) {
    console.debug('authenticator args', ...arguments);
  },

  invalidate(data) {
  }
});
