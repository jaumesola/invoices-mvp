console.log('login.func-tests');

/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

// These are Chimp globals
/* globals browser assert server */

import faker from 'faker';

import * as th from '../imports/_common/func-test-helpers.js';

describe('login @watch', function () {

    //return;
    
    var login_email = faker.lorem.slug() + '@' + faker.lorem.slug() + '.cxm';
    var login_password = faker.lorem.slug();
    
    beforeEach(function(done) {
        browser.url('http://localhost:3000/');
        done();
    });
    
    it('creates account', function () {
        th.waitAndClickFirst('#login-sign-in-link'); 
        th.waitAndClickFirst('#signup-link'); 
        browser.setValue('#login-email', login_email);
        browser.setValue('#login-password', login_password);
        browser.click('#login-buttons-password');
        browser.waitForExist('#login-name-link');
        browser.pause(100);
        assert(true); 
    });
    
    it('logs out', function () {
        th.waitAndClickFirst('#login-name-link');
        th.waitAndClickFirst('#login-buttons-logout');
        browser.pause(100);
        assert(true);
    });
    
    it('logs in', function () {
        th.waitAndClickFirst('#login-sign-in-link'); 
        browser.waitForExist('#login-buttons-password');
        browser.setValue('#login-email', login_email);
        browser.setValue('#login-password', login_password);
        browser.click('#login-buttons-password');
        browser.pause(100);
        assert(true);
    });
    
});