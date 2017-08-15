import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import faker from 'faker';

import * as th from '/imports/client/test-helpers.js';
import '/startup/both/companies.js';
import './templates.html';
import './code.js';

describe('Companies', function () {

    it('true is true', function () { chai.assert.isTrue(true); });
	  
    it('has an H2 with specific text', function () {	  
        th.withRenderedTemplate('companies', {}, (el) => {
            chai.assert.equal($(el).find('h2').text(), "Companies List");
        });
    });
    
    var collectionName = 'companies';
    
    Factory.define('company', CompaniesList, {
        companyTaxId: 0,
        companyName: ''
    });
    
    var fabricateDocument = () => {
        return Factory.create('company', {    
            companyTaxId: _.random(1000000, 9999999),
            companyName: faker.lorem.sentence()
        });
    };
    
    var count = _.random(1,9);

    var extractDataFromHtml = html => {
        var data =[];
        $(html).find('.company').each( function () {
            data.push({
                companyName:  $(this).find('div').first().text(),
                companyTaxId: $(this).find('div').next().text()
            });
       });
       return data;
    }
    
    it('renders ' + count + ' ' + collectionName, function () {
        th.withCollectionList({
            collectionName, fabricateDocument, count,
            propsInHtml: ['companyTaxId', 'companyName'],
            extractDataFromHtml
        });
    });

});