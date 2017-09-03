console.log('companies.func-tests');

import * as th from '../_common/func-test-helpers.js';

describe('/companies @watch', function () {
    
  beforeEach(function () {
    browser.url('http://localhost:3000/companies');
    //server.call('generateFixtures');
  });
  
  it('click on create button @watch', function () {
      th.waitAndClick('.create');
      chai.assert.equal( browser.getTagName('#TaxId'), 'input');
      chai.assert.equal( browser.getTagName('#Name'), 'input');
      chai.assert.equal( browser.getTagName('#Rating'), 'input');      
  });
});