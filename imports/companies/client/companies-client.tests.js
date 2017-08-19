import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import faker from 'faker';

import * as th from '/imports/client/test-helpers.js';
import '/imports/companies/client/companies-client.js';

describe('Companies', function () {

    it('true is true', function () { chai.assert.isTrue(true); });
	  
    it('has an H2 with specific text', function () {	  
        th.withRenderedTemplate('companies', {}, (el) => {
            chai.assert.equal($(el).find('h2').text(), "Companies List");
        });
    });
    
    var collectionName = 'companies';
    
    Factory.define('company', Companies, {
        TaxId: 0,
        Name: '',
        Rating: 0
    });
    
    var fabricateDocument = () => {
        return Factory.create('company', {    
            TaxId: _.random(1000000, 9999999),
            Name: faker.lorem.sentence(),
            Rating: _.random(0, 10),
        });
    };
    
    var count = _.random(1,9);

    var extractDataFromHtml = html => {
        var data =[];
        $(html).find('.company').each( function () {
            data.push({
                Name:   $(this).find('div').first().text(),
                TaxId:  $(this).find('div').first().next().text(),
                Rating: $(this).find('div').first().next().next().text(),              
            });
       });
       return data;
    }
    
    it('renders ' + count + ' ' + collectionName, function () {
        th.withCollectionList({
            collectionName, fabricateDocument, count,
            propsInHtml: ['Name', 'TaxId', 'Rating'],
            extractDataFromHtml
        });
    });

});