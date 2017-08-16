import * as dh from '/imports/both/docs-helpers.js';

CompaniesList = new Mongo.Collection('companies');

Meteor.methods({
    'createUpdateCompany': function(company){
        if ( !Meteor.userId() ) {
        	    return;
        }
       	
		// TODO specific validators
        check(company.TaxId,  String);
        check(company.Name,   String);
        check(company.Rating, Number);
            
        var doc = dh.docFromObject(company, ['TaxId','Name','Rating']);
        
        if ( company.Id == null) {       	
            	CompaniesList.insert(company);   
        } else {
            CompaniesList.update({ _id: company.Id }, doc);
        }
    },
    
    'removeCompany': function(companyId){
        if ( !Meteor.userId() ) {
    	        return;
        }
        check(companyId, String);    	
        CompaniesList.remove({ _id: companyId });
    }

});