/*
 * IMPORTANT: THIS MUST BE THE LAST app-test FILE TO LOAD
 * 
 * because it logs out & the rest of integration tests assume logged in
 */

console.log('logout.app-tests');

import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Tracker } from 'meteor/tracker';

import * as th from '/imports/client/app-test-helpers.js';

describe('Logout (LAST)', function () {
    
    before(function(done) {
       console.log('before logout');
       Meteor.logout( function(err) { th.logResult(err, 'logout'); } );
       FlowRouter.go('/');
       //Tracker.flush();
       setTimeout(done, 100);
    });
    
    it('not logged in message', function () {
        console.log('logout -- not logged in message');
    	 	chai.assert.equal($('.title-message').text(), "You must be logged-in to see this content.");
    });	
    
});