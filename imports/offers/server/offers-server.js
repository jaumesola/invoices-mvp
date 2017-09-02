import '/imports/offers/offers.js';

Meteor.publish('theOffers', function(){
	return Offers.find();
});