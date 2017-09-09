import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import faker from 'faker';
import * as th from '/imports/client/test-helpers.js';
import './advances-client.js';

th.factoryDefine(AdvancesConfig, {
    OfferId: 0,
    CreditorId: 0,
    DebtorId: 0,
    InvoiceNumber: 0,
});

AdvancesConfig.fakeDoc= function () {
    return th.factoryCreate(AdvancesConfig, {    
        OfferId: faker.random.number(100000),
        CreditorId: faker.random.number(100000),
        DebtorId: faker.random.number(100000),
        InvoiceNumber: faker.random.number(100000),
    });
};

AdvancesConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.datarow').each( function () {
        data.push({
            OfferId:       $(this).find('div').first().text(),
            CreditorId:    $(this).find('div').first().next().text(),
            DebtorId:      $(this).find('div').first().next().next().text(),
            InvoiceNumber: $(this).find('div').first().next().next().next().text(),
        });
   });
   return data;
}

describe(AdvancesConfig.collectionName, function () {  
    var config = AdvancesConfig;
    it(th.sayHasH2Text(), function () {	th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});