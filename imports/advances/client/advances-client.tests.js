import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import faker from 'faker';

import * as th from '/imports/client/test-helpers.js';
import '/imports/advances/client/advances-client.js';

describe('Advances', function () {
	  
    it(th.sayHasH2Text(), function () {	th.checksH2Text(AdvancesConfig); });
    
    th.factoryDefine(AdvancesConfig, {
        OfferId: 0,
        CreditorId: 0,
        DebtorId: 0,
        InvoiceNumber: 0,
    });

    AdvancesConfig['fabricateDocument'] = function () {
        return th.factoryCreate(AdvancesConfig, {    
            OfferId: faker.random.number(100000),
            CreditorId: faker.random.number(100000),
            DebtorId: faker.random.number(100000),
            InvoiceNumber: faker.random.number(100000),
        });
    };

    AdvancesConfig['extractDataFromHtml'] = function (html) {
        var data =[];
        $(html).find('.datarow').each( function () {
            data.push({
                OfferId:       $(this).find('div').first().text(),
                CreditorId:    $(this).find('div').first().next().text(),
                DebtorId:      $(this).find('div').first().next().next().text(),
                InvoiceNumber: $(this).find('div').first().next().next().next().text(),
            });
       });
       console.log(data);
       return data;
    }
    
    it(th.sayRendersSomeDocs(AdvancesConfig), function () {
        th.withCollectionList(AdvancesConfig);
    });

});