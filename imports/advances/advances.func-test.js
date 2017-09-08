console.log('advances.func-tests');

import * as Advances from './advances.js';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/advances @watch', function() {
    
    var AdvancesConfig = Advances.config;
    
    var fillFake = function () {
        for (var i = 0; i < AdvancesConfig.formFields.length; i++) {
            var field = AdvancesConfig.formFields[i];
            browser.setValue('#'+field, faker.random.number(100000));
        }
        /* TODO use consistent values
        browser.setValue('#OfferId', faker.random.number(100000));
        browser.setValue('#CreditorId', faker.random.number(100000));
        browser.setValue('#DebtorId', faker.random.number(100000));
        browser.setValue('#InvoiceNumber', faker.random.number(100000));
        */
    };
  
    before(function () {
        browser.url('http://localhost:3000/advances');
        //server.call('generateFixtures');
    });
  
  it(th.sayClickCreate(), function() { th.clickCreate(AdvancesConfig); });
  it('add an advance', function () { th.createDoc(fillFake); });
  it('select an advance', th.selectDoc);
  it('edit an advance', function () { th.editDoc(fillFake); });
  it('remove an advance', th.removeDoc);
});