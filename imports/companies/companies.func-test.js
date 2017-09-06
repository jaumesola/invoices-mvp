console.log('companies.func-tests');

import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

function fillForm(browser) {
    browser.setValue('#TaxId', faker.phone.phoneNumberFormat() );
    browser.setValue('#Name', faker.company.companyName() + ' ' + faker.company.companySuffix());
    browser.setValue('#Rating', faker.random.number(10)); 
}

describe('/companies @watch', function () {
    
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
  
    it('add a company', function () { 
        th.createDoc(function () { fillForm(browser); });
    });
    
    it('select a company', th.selectDoc);
    
    it('edit a company', function () {
        th.editDoc(function () { fillForm(browser); });
    });
    it('remove a company', th.removeDoc);
  
});