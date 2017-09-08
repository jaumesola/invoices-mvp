console.log('companies.func-tests');


import * as Companies from './companies.js';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/companies @watch', function () {
    
    var config = Companies.config;
    
    var fillFake = function () {
        browser.setValue('#TaxId', faker.phone.phoneNumberFormat() );
        browser.setValue('#Name', faker.company.companyName() + ' ' + faker.company.companySuffix());
        browser.setValue('#Rating', faker.random.number(10)); 
    }
    
    before(function () {
        browser.url('http://localhost:3000/companies');
        //server.call('generateFixtures');
    });
    
    it(th.sayClickCreate(), function() { th.clickCreate(config); });
    it(th.sayAdd(config), function () { th.createDoc(fillFake); });
    it(th.saySelect(config), th.selectDoc);
    it(th.sayEdit(config), function () { th.editDoc(fillFake); });
    it(th.sayRemove(config), th.removeDoc);
});