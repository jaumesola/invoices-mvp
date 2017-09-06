import '../offers.js';

Meteor.publish(OffersConfig.subscription, function(){
	return Offers.find();
});