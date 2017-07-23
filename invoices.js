
InvoicesList = new Mongo.Collection('invoices');

if(Meteor.isClient){
	console.log("Hello client");
    Template.invoices.helpers({
        'invoice': function(){
            return InvoicesList.find({}, { sort: {amount: -1, number: 1} });
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
            console.log("You clicked a .invoice element");
            console.log(selectedInvoice);
        },
        
        'click .increment': function(){
            var selectedInvoice = Session.get('selectedInvoice');   
            InvoicesList.update({ _id: selectedInvoice }, { $inc: {amount: 5} } );
        },
        
        'click .decrement': function(){
            var selectedInvoice = Session.get('selectedInvoice');   
            InvoicesList.update({ _id: selectedInvoice }, { $inc: {amount: -5} } );
        }

    });
    
    Template.addInvoiceForm.events({
        'submit form': function(event){
            event.preventDefault();
            var invoiceNumberVar = Number(event.target.invoiceNumber.value);
            var invoiceAmountVar = Number(event.target.invoiceAmount.value);
            InvoicesList.insert({
                number: invoiceNumberVar,
                amount: invoiceAmountVar
            });
        }    	
    });
}

if(Meteor.isServer){
	// nothing so far
	console.log("Hello server");
}

console.log("Bye client & server");