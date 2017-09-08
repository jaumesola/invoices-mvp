console.log('companies.func-tests');

import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/companies @watch', function () {
    
    var fillFake = function () {
        browser.setValue('#TaxId', faker.phone.phoneNumberFormat() );
        browser.setValue('#Name', faker.company.companyName() + ' ' + faker.company.companySuffix());
        browser.setValue('#Rating', faker.random.number(10)); 
    }
    
    before(function () {
        browser.url('http://localhost:3000/companies');
        //server.call('generateFixtures');
    });
  
    it('click on create button', function () {
        th.waitAndClickFirst('.create');
        chai.assert.equal( browser.getTagName('#TaxId'), 'input');
        chai.assert.equal( browser.getTagName('#Name'), 'input');
        chai.assert.equal( browser.getTagName('#Rating'), 'input');
    });
  
    it('add a company', function () { th.createDoc(fillFake); });
    it('select a company', th.selectDoc);
    it('edit a company', function () { th.editDoc(fillFake); });
    it('remove a company', th.removeDoc);
});