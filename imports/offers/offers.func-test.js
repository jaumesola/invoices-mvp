console.log('offers.func-tests');

import * as Offers from './offers.js';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/offers @watch', function() {
    
    var OffersConfig = Offers.config;
    
    var fillFake = function () {
        browser.setValue('#Amount', faker.random.number(100000)); // _.random(0, 100000));  
        var d = new Date();
        d.setDate(d.getDate() + (8 + faker.random.number(350)));
        browser.setValue('#Maturity', d.toString());
    };
  
    before(function () {
        browser.url('http://localhost:3000/offers');
        //server.call('generateFixtures');
    });
  
    it(th.sayClickCreate(), function() { th.clickCreate(OffersConfig); });
    it('add an offer', function () { th.createDoc(fillFake); });
    it('select an offer', th.selectDoc);
    it('edit an offer', function () { th.editDoc(fillFake); });
    it('remove an offer', th.removeDoc);
});