console.log('advances.app-tests');

import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import * as th from '/imports/client/app-test-helpers.js';

describe('/advances', function () {

    before(function(done) {
        console.log("Advances -- before");
        FlowRouter.go('/advances');
        setTimeout(done, 300);
    });
    
    it('shows in H2: ' + h2Text, function () {th.h2Text('advances')});
    it('shows create button', th.createButton);
});