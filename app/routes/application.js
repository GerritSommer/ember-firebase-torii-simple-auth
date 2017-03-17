import Ember from 'ember';

let { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),

  actions: {

    signOut(email, password, provider='password') {
      this.get('session').authenticate('authenticator:torii', provider, { email, password })
    }

  }

});
