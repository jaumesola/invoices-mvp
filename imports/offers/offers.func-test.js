console.log('offers.func-tests');

import * as Offers from './offers.js';
import * as fth from '../_common/func-test-helpers.js';
import * as oth from './client/offers-test-helpers.js';

describe('/offers @watch', function() {
    
    var config = Offers.config;
    config.fakeDoc = oth.fakeDoc;
  
    before(function () {
        browser.url('http://localhost:3000/offers');
        //server.call('generateFixtures');
    });
  
    it(fth.sayClickCreate(), function() { fth.clickCreate(config); });
    it(fth.sayAdd(config), function () { fth.createDoc(config); });
    it(fth.saySelect(config), fth.selectDoc);
    it(fth.sayEdit(config), function () { fth.editDoc(config); });
    it(fth.sayRemove(config), fth.removeDoc);
});