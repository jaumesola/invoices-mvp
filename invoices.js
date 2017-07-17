
InvoicesList = new Mongo.Collection('invoices');

if(Meteor.isClient){
	
    Template.invoices.helpers({
        'invoice': function(){
            return InvoicesList.find();
        }
    });
    
    Template.invoices.events({
        'click .invoice': function(){
            console.log("You clicked a .invoice element");
        }
    });
}

if(Meteor.isServer){
	// nothing so far
}