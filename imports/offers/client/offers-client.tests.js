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

OffersConfig.fakeDoc = oth.fakeDoc;

OffersConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.cb-row').each( function () {
        data.push({
            InvoiceAmount:   $(this).find('div').first().text(),
            InvoiceMaturity: $(this).find('div').first().next().text(),
            Status:          $(this).find('div').first().next().next().text(),
            OfferAmount:     $(this).find('div').first().next().next().next().text(),
            OfferDate:       $(this).find('div').first().next().next().next().next().text(),
        });
   });
   return data;
}

describe(OffersConfig.collectionName, function () {  
    var config = OffersConfig;
    it(th.sayHasH2Text(), function () { th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});