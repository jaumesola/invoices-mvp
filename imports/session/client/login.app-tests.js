console.log('login.app-tests');

import * as th from '/imports/client/app-test-helpers.js';

var currentUser = {
        "name": "Jose Rodriguez",
        "username": "pepe",
        "password": "pepe"
      };

before(function(done) {
    console.log("*** app-tests START *** root before -- log in");
    Accounts.createUser(currentUser, function(err, success) {
        Meteor.loginWithPassword("pepe","pepe", function(err) { th.logResult(err, 'login'); });
    });
    setTimeout(done, 300);
});