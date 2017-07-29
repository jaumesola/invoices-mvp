
console.log("Hello companies client & server");

CompaniesList = new Mongo.Collection('companies');

Meteor.methods({
    'createCompany': function(companyTaxIdVar, companyNameVar){
        var currentUserId = Meteor.userId();
        if(currentUserId){
            check(companyTaxIdVar, String); // TODO specific validator
            check(companyNameVar, String);  // TODO specific validator            	
        	    CompaniesList.insert({
            	    companyTaxId: companyTaxIdVar,
            	    companyName: companyNameVar
            });
        }
    },
    'removeCompany': function(companyId){
        var currentUserId = Meteor.userId();
        if(currentUserId){
            check(companyId, String);    	
            CompaniesList.remove({ _id: companyId });
        }
    },
    'updateCompany': function(companyId, companyTaxIdVar, companyNameVar) {
        var currentUserId = Meteor.userId();
        if(currentUserId){
            check(companyTaxIdVar, String); // TODO specific validator // TODO same check than in createCompany
            check(companyNameVar, String);  // TODO specific validator // TODO same check than in createCompany
    	    	    CompaniesList.update(
    	    	    		{ _id: companyId },
    	    	    		{ companyTaxId: companyTaxIdVar,
        	          companyName: companyNameVar }
    	    	    	);
        }    	
    }
});

console.log("Bye companies client & server");