import '/imports/invoices/invoices.js';

Meteor.publish('theInvoices', function(){
	var currentUserId = this.userId;
	return InvoicesList.find({ userId: currentUserId });
});