console.log('offers.func-tests');

import * as Offers from './offers.js';
import * as th from '../_common/func-test-helpers.js';
import faker from 'faker';

describe('/offers @watch', function() {
    
    var config = Offers.config;
    
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
  
    it(th.sayClickCreate(), function() { th.clickCreate(config); });
    it(th.sayAdd(config), function () { th.createDoc(fillFake); });
    it(th.saySelect(config), th.selectDoc);
    it(th.sayEdit(config), function () { th.editDoc(fillFake); });
    it(th.sayRemove(config), th.removeDoc);
});