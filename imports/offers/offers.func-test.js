console.log('offers.func-tests');

//import { _ } from 'meteor/underscore';
import * as th from '../_common/func-test-helpers.js';

var divClass = '.offer';

describe('/offers @watch', function () {
    
  before(function () {
    browser.url('http://localhost:3000/offers');
    //server.call('generateFixtures');
  });
  
  it('click on create button', function () {
      th.waitAndClick('.create');
      chai.assert.equal( browser.getTagName('#Amount'), 'input');
      chai.assert.equal( browser.getTagName('#Maturity'), 'input');
  });
  
  it('add an offer', function () {
      th.createDoc(divClass, function () {
          browser.setValue('#Amount', 2222 ); // _.random(0, 100000));
          
          var d = new Date();
          d.setDate(d.getDate() + 30);
          browser.setValue('#Maturity', d.toDateString());
      });
  });
  
});