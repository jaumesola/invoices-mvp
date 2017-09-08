import '../companies-meteor.js';

Meteor.publish(CompaniesConfig.subscription, function () {
	return CompaniesConfig.collection.find();
});