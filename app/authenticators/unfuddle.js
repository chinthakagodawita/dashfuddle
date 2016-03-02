import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP, $, isEmpty, run } = Ember;

export default Base.extend({
  restore(data) {
    console.warn('restore called: ', data);
    return new RSVP.Promise((resolve, reject) => {
      if (isEmpty(data.username) || isEmpty(data.password) || isEmpty(data.protocol) || isEmpty(data.subdomain)) {
        reject();
      }
      else {
        resolve(data);
      }
    });
  },

  authenticate(protocol, subdomain, username, password) {
    return new RSVP.Promise((resolve, reject) => {
      this.callLogin(protocol, subdomain, username, password).then((response) => {
        run(() => {
          resolve({
            protocol,
            subdomain,
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

  callLogin(protocol, subdomain, username, password) {
    let url = `${protocol}://${subdomain}.unfuddle.com/api/v1/account`;
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
