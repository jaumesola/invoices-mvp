import * as dh from '/imports/both/docs-helpers.js';
import { Class as Model } from 'meteor/jagi:astronomy';

Companies = new Mongo.Collection('companies');

Company = Model.create({
    name: 'Company',
    collection: Companies,
    fields: {
        TaxId: {
            type: String,
            validators: [
                { type: 'minLength', param: 5 },
                { type: 'maxLength', param: 25 }
        ]},
        Name: {
            type: String,
            validators: [
                { type: 'minLength', param: 5 },
                { type: 'maxLength', param: 100 }
        ]},
        Rating: {
            type: Number,
            validators: [
                { type: 'gte', param: 0 },
                { type: 'lte', param: 10 }
        ]}
    }
});

Meteor.methods({
    'saveCompany': function(company){
        if ( !Meteor.userId() ) {
        	    return;
        }
       	
		// TODO implement specific validators in Astronomy
        //check(company.TaxId,  String);
        //check(company.Name,   String);
        //check(company.Rating, Number);

        company.save();
    },
    
    'removeCompany': function(company){
        if ( !Meteor.userId() ) {
    	        return;
        }
        company.remove();        
    }

});