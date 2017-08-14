Meteor.publish('theInvoices', function(){
	var currentUserId = this.userId;
	return InvoicesList.find({ userId: currentUserId });
});