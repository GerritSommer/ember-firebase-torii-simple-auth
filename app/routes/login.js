import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

 actions: {

    signIn(email, password, provider='password') {
      this.get('session').authenticate('authenticator:torii', provider, { email, password })
    }
  }

});
