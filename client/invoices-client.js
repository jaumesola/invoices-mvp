console.log("Hello client");

Meteor.subscribe('theInvoices');
	
Template.invoices.helpers({
    'invoice': function(){
        return InvoicesList.find({ userId: Meteor.userId() }, { sort: {amount: -1, number: 1} });
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedInvoice')){
            return "selected"
        }
    },
        
    'selectedInvoice': function(){
        return InvoicesList.findOne({ _id: Session.get('selectedInvoice') });
        }
});

Template.invoices.events({
    'click .invoice': function(){
    		Session.set('selectedInvoice', this._id);
    		var selectedInvoice = Session.get('selectedInvoice');
    },
    'click .increment': function(){
        var selectedInvoice = Session.get('selectedInvoice');
        Meteor.call('updateInvoice', selectedInvoice, 5);
    },
    'click .decrement': function(){
        var selectedInvoice = Session.get('selectedInvoice');
        Meteor.call('updateInvoice', selectedInvoice, -5);
    },
    'click .remove': function(){
        var selectedInvoice = Session.get('selectedInvoice')
        Meteor.call('removeInvoice', selectedInvoice);
    }
});

Template.addInvoiceForm.events({
    'submit form': function(event){
        event.preventDefault();
        var currentUserId = Meteor.userId();
        var invoiceNumberVar = Number(event.target.invoiceNumber.value);
        var invoiceAmountVar = Number(event.target.invoiceAmount.value);
        Meteor.call('createInvoice', invoiceNumberVar, invoiceAmountVar);
        event.target.invoiceNumber.value = "";
        event.target.invoiceAmount.value = "";
    }
});

console.log("Bye client");