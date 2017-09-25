import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import * as th from '/imports/client/test-helpers.js';
import './offers-client.js';
import * as oth from './offers-test-helpers.js';

th.factoryDefine(OffersConfig, {
    Amount: 0,
    Maturity: Date(),
    Status: 'NOT_NOW',
});

OffersConfig.fakeData = oth.fakeData;

OffersConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.datarow').each( function () {
        data.push({
            Amount:   $(this).find('div').first().text(),
            Maturity: $(this).find('div').first().next().text(),
            Status:   $(this).find('div').first().next().next().text(),
        });
   });
   return data;
}

describe(OffersConfig.collectionName, function () {  
    var config = OffersConfig;
    it(th.sayHasH2Text(), function () { th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});

