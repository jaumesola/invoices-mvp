import '../offers.js';

Meteor.publish(OffersConfig.subscription, function () {
	return OffersConfig.collection.find();
});