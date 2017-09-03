console.log('companies.func-tests');

import * as th from '../_common/func-test-helpers.js';

var divClass = '.company';

describe('/companies @watch', function () {
    
  before(function () {
    browser.url('http://localhost:3000/companies');
    //server.call('generateFixtures');
  });
  
  it('click on create button', function () {
      th.waitAndClick('.create');
      chai.assert.equal( browser.getTagName('#TaxId'), 'input');
      chai.assert.equal( browser.getTagName('#Name'), 'input');
      chai.assert.equal( browser.getTagName('#Rating'), 'input');
  });
  
  it('add a company', function () {
      th.createDoc(divClass, function () {
          browser.setValue('#TaxId', 'AAA-BBB-CCC' );
          browser.setValue('#Name', 'Acme Inc');
          browser.setValue('#Rating', 3);          
      });
  });
  
  it ('select a company', function() {
      th.selectDoc(divClass, function () {
      });
  });
  
});