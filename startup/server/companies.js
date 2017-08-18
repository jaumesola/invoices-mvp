Meteor.publish('theCompanies', function(){
	return Companies.find();
});