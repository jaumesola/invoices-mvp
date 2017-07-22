
InvoicesList = new Mongo.Collection('invoices');

if(Meteor.isClient){
	console.log("Hello client");
    Template.invoices.helpers({
        'invoice': function(){
            return InvoicesList.find();
        },        
        'selectedClass': function(){
            if(this._id == Session.get('selectedInvoice')){
                return "selected"
            }
        }
    });
    
    Template.invoices.events({
        'click .invoice': function(){
        		Session.set('selectedInvoice', this._id);
        		var selectedInvoice = Session.get('selectedInvoice');
            console.log("You clicked a .invoice element");
            console.log(selectedInvoice);
        }
    });
}

if(Meteor.isServer){
	// nothing so far
	console.log("Hello server");
}

console.log("Bye client & server");