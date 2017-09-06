import { Class as Model } from 'meteor/jagi:astronomy';
import * as Errors from '/imports/_common/errors.js';

CompaniesConfig = {
    collectionName: 'companies',
    modelName: 'Company',
    subscription: 'theCompanies',
    saveMethod: 'saveCompany',
    newDocument: function () {
        return new Company();
    },
    findOneDocument: function (condition) {
        return Company.findOne(condition);
    }
}

Companies = new Mongo.Collection(CompaniesConfig.collectionName);

Company = Model.create({
    name: CompaniesConfig.modelName,
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

CompaniesConfig['collection'] = Companies;
CompaniesConfig['model'] = Company;

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