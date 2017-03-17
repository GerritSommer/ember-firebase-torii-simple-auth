import Ember                from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

let { inject: { service } } = Ember;

export default ToriiFirebaseAdapter.extend({
  firebase: service()
});