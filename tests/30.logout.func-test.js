console.log('logout.func-tests');

import * as th from '../imports/_common/func-test-helpers.js';


describe('logout @watch', function () {
    
    //return;
    
    it('logs out', function () {
        th.waitAndClickFirst('#login-name-link');
        th.waitAndClickFirst('#login-buttons-logout');
        browser.waitForExist('.title-message');
        chai.assert.equal( browser.getText('.title-message'), "You must be logged-in to see this content.");
    });
    
});