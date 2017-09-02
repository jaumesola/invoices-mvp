import '/imports/offers/offers.js';
import '/imports/offers/client/offers.html';

Meteor.subscribe('theOffers');

Template.offers.helpers({
    'offers': function(){
        return Offers.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedOfferId')){
            return "selected"
        }
    },
        
    'selectedCompany': function(){
        return Offers.findOne({ _id: Session.get('selectedOfferId') });
        }
});

Template.offers.onRendered(function () {
	cform = document.getElementById("offerForm");
});

function cleanOfferForm() {
    cform.Amount.value    = null;
    cform.Maturity.value  = null;
}

function showForm() {
    $( cform ).show();
}

function hideForm() {
    $( cform ).hide();	
}

// return currently selected company object or if none a newly created one
function getOffer() {
    if (Session.get('selectedOfferId') == null) { 
    		return new Offer();
    } else {
        return Offer.findOne({_id: Session.get('selectedOfferId')});
    }
}

Template.offers.events({
    'click .offer': function(){
    		Session.set('selectedOfferId', this._id);
    		hideForm();
    },
    'click .create': function(){
        cleanOfferForm();
        showForm();
    		Session.set('selectedOfferId', null);
    },    
    'click .edit': function(){
		showForm();
		var c = Template.offers.__helpers.get("selectedOffer").call();
		document.getElementById("Amount").value  = c.Amount;
		document.getElementById("Maturity").value   = c.Maturity;
    },
    'click .remove': function(){
        Meteor.call('removeOffer', getOffer());
		hideForm();
    }
});

Template.editOfferForm.events({
    'submit form': function(event){
        event.preventDefault();
        var offer = getOffer();
        // TODO: make generic
        offer.Amount   = cform.Amount.value;
        offer.Maturity = cform.Maturity.value;
        Meteor.call('saveOffer', offer);
		hideForm();
        cleanOfferForm();
    }
});