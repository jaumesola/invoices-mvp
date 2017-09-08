console.log('offers.app-tests');

import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { $ } from 'meteor/jquery';

import * as th from '/imports/client/app-test-helpers.js';

describe('/offers', function () {

    before(function(done) {
        console.log("Offers -- before");
        FlowRouter.go('/offers');
        setTimeout(done, 300);
    });

    var h2Text = "Offers Management";
    it('shows in H2: ' + h2Text, function () {th.h2Text(h2Text)});
    it('shows create button', th.createButton);
    //it('shows form on create button click', th.showsFomOnCreateClick); 
});