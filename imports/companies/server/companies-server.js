import '/imports/companies/companies.js';

Meteor.publish('theCompanies', function(){
	return Companies.find();
});