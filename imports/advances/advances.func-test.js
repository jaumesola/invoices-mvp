console.log('advances.func-tests');

import * as Advances from './advances.js';
import * as fth from '../_common/func-test-helpers.js';
import * as ath from './client/advances-test-helpers.js';

describe('/advances @watch', function() {
    
    var config = Advances.config;
    config.fakeData = ath.fakeData();
  
    before(function () {
        browser.url('http://localhost:3000/advances');
        //server.call('generateFixtures');
    });
  
    it(fth.sayClickCreate(), function() { fth.clickCreate(config); });
    it(fth.sayAdd(config), function () { fth.createDoc(config); });
    it(fth.saySelect(config), fth.selectDoc);
    it(fth.sayEdit(config), function () { fth.editDoc(config); });
    it(fth.sayRemove(config), fth.removeDoc);
});