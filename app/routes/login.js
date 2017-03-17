import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

 actions: {

    signIn(email, password, provider='password') {

      this.get('session').open('firebase', {
        provider: provider,
        email:    email,
        password: password,
      }).then(() => {
        this.setProperties({ email: null, password: null });
      }, (error) => {
        console.log(error);
      });
    }
  }

});
