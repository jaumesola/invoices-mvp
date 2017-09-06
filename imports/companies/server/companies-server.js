import '../companies.js';

Meteor.publish(CompaniesConfig.subscription, function () {
	return CompaniesConfig.collection.find();
});