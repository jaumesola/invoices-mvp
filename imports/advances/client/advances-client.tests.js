import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import * as th from '/imports/client/test-helpers.js';
import './advances-client.js';
import * as ath from './advances-test-helpers.js';

th.factoryDefine(AdvancesConfig, {
    OfferId: 0,
    CreditorId: 0,
    DebtorId: 0,
    InvoiceNumber: 0,
    Status: 'CLEAR_RISK',
});

AdvancesConfig.fakeDoc = ath.fakeDoc;

AdvancesConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.cb-row').each( function () {
        data.push({
            OfferId:       $(this).find('div').first().text(),
            CreditorId:    $(this).find('div').first().next().text(),
            DebtorId:      $(this).find('div').first().next().next().text(),
            InvoiceNumber: $(this).find('div').first().next().next().next().text(),
            Status:        $(this).find('div').first().next().next().next().next().text(),            
        });
   });
   return data;
}

describe(AdvancesConfig.collectionName, function () {  
    var config = AdvancesConfig;
    it(th.sayHasH2Text(), function () {	th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});