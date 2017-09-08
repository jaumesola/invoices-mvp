import '../offers-meteor.js';

Meteor.publish(OffersConfig.subscription, function () {
	return OffersConfig.collection.find();
});