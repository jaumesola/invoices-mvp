import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import faker from 'faker';
import * as th from '/imports/client/test-helpers.js';
import '/imports/offers/client/offers-client.js';

th.factoryDefine(OffersConfig, {
    Amount: 0,
    Maturity: Date()
});

OffersConfig.fabricateDocument = function () {
    return th.factoryCreate(OffersConfig, {    
        Amount: faker.random.number(100000),
        Maturity: Date()
    });
}

OffersConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.datarow').each( function () {
        data.push({
            Amount:   $(this).find('div').first().text(),
            Maturity: $(this).find('div').first().next().text()
        });
   });
   return data;
}

describe(OffersConfig.collectionName, function () {  
    var config = OffersConfig;
    it(th.sayHasH2Text(), function () { th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});