
InvoicesList = new Mongo.Collection('invoices');

Meteor.methods({
    'createInvoice': function(invoiceNumberVar, invoiceAmountVar){
        check(invoiceNumberVar, Number);
        check(invoiceAmountVar, Number);        
        var currentUserId = Meteor.userId();
        if(currentUserId){
            InvoicesList.insert({
        	        userId: currentUserId,
                number: invoiceNumberVar,
                amount: invoiceAmountVar
            });
        }
    },
    'removeInvoice': function(invoiceId){
        check(invoiceId, String);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            InvoicesList.remove({ _id: invoiceId, userId: currentUserId });
        }
    },
    'updateInvoice': function(invoiceId, amountIncrease) {
        check(invoiceId, String);
        check(amountIncrease, Number);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            InvoicesList.update({ _id: invoiceId, userId: currentUserId }, {$inc: {amount: amountIncrease}});
        }    	
    }
});