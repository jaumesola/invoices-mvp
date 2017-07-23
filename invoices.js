
InvoicesList = new Mongo.Collection('invoices');

if(Meteor.isClient){
	
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
            InvoicesList.update({ _id: selectedInvoice }, { $inc: {amount: 5} } );
        },
        
        'click .decrement': function(){
            var selectedInvoice = Session.get('selectedInvoice');   
            InvoicesList.update({ _id: selectedInvoice }, { $inc: {amount: -5} } );
        },
        
        'click .remove': function(){
            var selectedInvoice = Session.get('selectedInvoice')
            InvoicesList.remove({ _id: selectedInvoice });
        }
    });
    
    Template.addInvoiceForm.events({
        'submit form': function(event){
            event.preventDefault();
            var currentUserId = Meteor.userId();
            var invoiceNumberVar = Number(event.target.invoiceNumber.value);
            var invoiceAmountVar = Number(event.target.invoiceAmount.value);
            InvoicesList.insert({
            	    userId: currentUserId,
                number: invoiceNumberVar,
                amount: invoiceAmountVar
            });
        }    	
    });
}

if(Meteor.isServer){
	// nothing so far
	console.log("Hello server");
	Meteor.publish('theInvoices', function(){
	    var currentUserId = this.userId;
	    return InvoicesList.find({ userId: currentUserId });
	});
}

console.log("Bye client & server");

