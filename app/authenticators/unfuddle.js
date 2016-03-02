import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP, $, isEmpty, run } = Ember;

export default Base.extend({
  restore(data) {
    console.warn('restore called: ', data);
    return new RSVP.Promise((resolve, reject) => {
      if (isEmpty(data.username) || isEmpty(data.password)) {
        reject();
      }
      else {
        resolve(data);
      }
    });
  },

  authenticate(username, password) {
    return new RSVP.Promise((resolve, reject) => {
      this.callLogin(username, password).then((response) => {
        run(() => {
          resolve({
            username,
            password,
            id: response['id'],
            domainTitle: response['title'],
            accessKey: response['access_key']
          });
        });
      }, (/*xhr*/) => {
        run(null, reject, 'Could not authenticate against Unfuddle, are your user details correct?');
      });
    });
  },

  // @TODO
  // invalidate(data) {
  // },

  callLogin(username, password) {
    let url = 'https://sitbacksolutions.unfuddle.com/api/v1/account';
    let options = {
      url,
      type: 'GET',
      dataType: 'json',
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ` + btoa(`${username}:${password}`)
      }
    };

    return $.ajax(options);
  }
});
