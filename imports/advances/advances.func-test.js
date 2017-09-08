console.log('advances.func-tests');

//import { _ } from 'meteor/underscore';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';


describe('/advances @watch', function() {
    
    var fillFake = function () {
        // TODO use consistent values
        browser.setValue('#OfferId', faker.random.number(100000));
        browser.setValue('#CreditorId', faker.random.number(100000));
        browser.setValue('#DebtorId', faker.random.number(100000));
        browser.setValue('#InvoiceNumber', faker.random.number(100000));
        //altert('filled');
    };
  
    before(function () {
        browser.url('http://localhost:3000/advances');
        //server.call('generateFixtures');
    });
  
  it('click on create button', function() {
      th.waitAndClickFirst('.create');
      // TODO make a loop
      chai.assert.equal( browser.getTagName('#OfferId'), 'input');
      chai.assert.equal( browser.getTagName('#CreditorId'), 'input');
      chai.assert.equal( browser.getTagName('#DebtorId'), 'input');
      chai.assert.equal( browser.getTagName('#InvoiceNumber'), 'input');
  });
  
  it('add an advance', function () { th.createDoc(fillFake); });
  it('select an advance', th.selectDoc);
  it('edit an advance', function () { th.editDoc(fillFake); });
  it('remove an advance', th.removeDoc);
});