
console.log("Hello companies client & server");

CompaniesList = new Mongo.Collection('companies');

Meteor.methods({
    'createUpdateCompany': function(company){
        if ( !Meteor.userId() ) {
        	    return;
        }
       	
        check(company.TaxId, String); // TODO specific validator
        check(company.Name, String);  // TODO specific validator   
            
        if ( company.Id == null) {       	
            	CompaniesList.insert({	
                companyTaxId: company.TaxId,
            	    companyName: company.Name
            });   
        } else {
            CompaniesList.update(
            	    { _id: company.Id },
            	    { companyTaxId: company.TaxId,
                	  companyName: company.Name }
            	);
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

console.log("Bye companies client & server");