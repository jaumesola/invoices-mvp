import * as dh from '/imports/both/docs-helpers.js';
import { Class as Model } from 'meteor/jagi:astronomy';

Companies = new Mongo.Collection('companies');

Company = Model.create({
  name: 'Company',
  collection: Companies,
  fields: {
    TaxId: String,
    Name: String,
    Rating: Number
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