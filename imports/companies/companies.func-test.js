console.log('companies.func-tests');

import * as Companies from './companies.js';
import * as fth from '../_common/func-test-helpers.js';
import * as cth from './client/companies-test-helpers.js';

describe('/companies @watch', function () {
    
    var config = Companies.config;
    config.fakeDoc = cth.fakeDoc;
    
    before(function () {
        browser.url('http://localhost:3000/companies');
        //server.call('generateFixtures');
    });
    
    it(fth.sayClickCreate(), function() { fth.clickCreate(config); });
    it(fth.sayAdd(config), function () { fth.createDoc(config); });
    it(fth.saySelect(config), fth.selectDoc);
    it(fth.sayEdit(config), function () { fth.editDoc(config); });
    it(fth.sayRemove(config), fth.removeDoc);
});