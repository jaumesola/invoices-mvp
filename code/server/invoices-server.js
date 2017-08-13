
console.log("Hello server");

Meteor.publish('theInvoices', function(){
	var currentUserId = this.userId;
	return InvoicesList.find({ userId: currentUserId });
});

console.log("Bye server");