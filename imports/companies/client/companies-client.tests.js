import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import faker from 'faker';
import * as th from '/imports/client/test-helpers.js';
import '/imports/companies/client/companies-client.js';

th.factoryDefine(CompaniesConfig, {
    TaxId: 0,
    Name: '',
    Rating: 0
});

CompaniesConfig.fabricateDocument = function () {
    return th.factoryCreate(CompaniesConfig, {    
        TaxId: faker.company.companyName() + ' ' + faker.company.companySuffix(),
        Name: faker.lorem.sentence(),
        Rating: faker.random.number(10),
    });
};

CompaniesConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.datarow').each( function () {
        data.push({
            Name:   $(this).find('div').first().text(),
            TaxId:  $(this).find('div').first().next().text(),
            Rating: $(this).find('div').first().next().next().text(),              
        });
   });
   return data;
}

describe(CompaniesConfig.collectionName, function () {  
    var config =  CompaniesConfig;
    it(th.sayHasH2Text(), function () { th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});