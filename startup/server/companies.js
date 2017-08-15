Meteor.publish('theCompanies', function(){
	return CompaniesList.find();
});