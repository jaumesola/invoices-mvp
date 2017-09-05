import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import faker from 'faker';

import * as th from '/imports/client/test-helpers.js';
import '/imports/offers/client/offers-client.js';

describe('Offers', function () {
	  
    it('has an H2 with specific text', function () {	  
        th.withRenderedTemplate('offers', {}, (el) => {
            chai.assert.equal($(el).find('h2').text(), "Offers List");
        });
    });
    
    Factory.define('offer', Offers, {
        Amount: 0,
        Maturity: Date()
    });

    OffersConfig['fabricateDocument'] = function () {
        return Factory.create('offer', {    
            Amount: _.random(0, 100000),
            Maturity: Date()
        });
    };
    
    OffersConfig['propsInHtml'] = ['Amount', 'Maturity'];

    OffersConfig['extractDataFromHtml'] = function (html) {
        var data =[];
        $(html).find('.datarow').each( function () {
            data.push({
                Amount:   $(this).find('div').first().text(),
                Maturity: $(this).find('div').first().next().text()
            });
       });
       return data;
    }
    
    it(th.sayRendersSomeDocs(OffersConfig), function () {
        th.withCollectionList(OffersConfig);
    });

});