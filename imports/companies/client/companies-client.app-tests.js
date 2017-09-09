console.log('companies.app-tests');

import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import * as th from '/imports/client/app-test-helpers.js';

describe('/companies', function () {

    before(function(done) {
        console.log("Companies -- before");
        FlowRouter.go('/companies');
        setTimeout(done, 300);
    });
    
    it('shows in H2: ' + h2Text, function () {th.h2Text('companies')});
    it('shows create button', th.createButton);
});