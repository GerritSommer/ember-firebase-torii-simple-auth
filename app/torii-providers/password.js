// app/torii-providers/password.js
import Ember from 'ember';

let { inject: { service } } = Ember;

export default Ember.Object.extend({
  torii: service(),

  open(options = {}) {
    let torii        = this.get('torii');
    options.provider = 'password';

    return torii.open("firebase", options).then((data)=> {
      // return a useful userobject
      return data.providerData[0]
    });
  },

  restore() {
    return this.get("torii").fetch().then;
  },

  invalidate() {
    return this.get("torii").close();
  }

});