import { Class as Model } from 'meteor/jagi:astronomy';
import * as Errors from '/imports/_common/errors.js';


const CompaniesConfig = {
    collectionName: 'companies'
}

Companies = new Mongo.Collection(CompaniesConfig.collectionName);

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

        try {
        		company.save();
        } catch (e) {
        		Errors.handle(e);
        }
    },
    
    'removeCompany': function(company){
        if ( !Meteor.userId() ) {
    	        return;
        }
        company.remove();        
    }

});