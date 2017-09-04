import '/imports/companies/companies.js';

Meteor.publish(CompaniesConfig.subscription, function () {
	return Companies.find();
});