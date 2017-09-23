console.log('advances.app-tests');

import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import * as ath from '/imports/client/app-test-helpers.js';
import './advances-client.js';

var config = AdvancesConfig;

// BOILERPLATE START
var url = ath.url(config);

describe(url, function () {
    
    before(function(done) {
        console.log(url + " before");
        FlowRouter.go(url);
        setTimeout(done, 300);
    });
    
    it(ath.sayShowsCorrectH2(config), function () {ath.h2Text(config)});
    it(ath.sayShowsCreateButton(), ath.createButton);
    //it('shows form on create button click', th.showsFomOnCreateClick); 
});
// BOILERPLATE END