console.log("Hello companies server");

Meteor.publish('theCompanies', function(){
	return CompaniesList.find();
});

console.log("Bye companies server");