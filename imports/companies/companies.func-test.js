console.log('companies.func-tests');

import * as Companies from './companies.js';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/companies @watch', function () {
    
    var CompaniesConfig = Companies.config;
    
    var fillFake = function () {
        browser.setValue('#TaxId', faker.phone.phoneNumberFormat() );
        browser.setValue('#Name', faker.company.companyName() + ' ' + faker.company.companySuffix());
        browser.setValue('#Rating', faker.random.number(10)); 
    }
    
    before(function () {
        browser.url('http://localhost:3000/companies');
        //server.call('generateFixtures');
    });
    
    it(th.sayClickCreate(), function() { th.clickCreate(CompaniesConfig); });
    it('add a company', function () { th.createDoc(fillFake); });
    it('select a company', th.selectDoc);
    it('edit a company', function () { th.editDoc(fillFake); });
    it('remove a company', th.removeDoc);
});