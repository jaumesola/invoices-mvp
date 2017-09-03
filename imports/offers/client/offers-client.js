import '/imports/offers/offers.js';
import * as cc from '/imports/client/common.js';
import '/imports/offers/client/offers.html';

Meteor.subscribe('theOffers');

Template.offers.helpers({
    'offer': function(){
        return Offers.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedDocId')){
            return "selected"
        }
    },
        
    'selectedDoc': function(){
        return Offers.findOne({ _id: Session.get('selectedDocId') });
        }
});

Template.offers.onRendered( cc.templateOnRendered );

function cleanOfferForm() {
    cform.Amount.value    = null;
    cform.Maturity.value  = null;
}

Template.offers.events({
    'click .offer': function(){
    		Session.set('selectedDocId', this._id);
    		cc.hideForm();
    },
    'click .create': function(){
        cleanOfferForm();
        cc.showForm();
    		Session.set('selectedDocId', null);
    },    
    'click .edit': function(){
		cc.showForm();
		var c = Template.offers.__helpers.get("selectedDoc").call();
		document.getElementById("Amount").value  = c.Amount;
		document.getElementById("Maturity").value   = c.Maturity;
    },
    'click .remove': function(){
        Meteor.call('removeOffer', cc.getDoc(OffersConfig));
		cc.hideForm();
    }
});

Template.editOfferForm.events({
    'submit form': function(event){
        event.preventDefault();
        var offer = cc.getDoc(OffersConfig);
        // TODO: make generic
        offer.Amount   = Number(cform.Amount.value);
        offer.Maturity = new Date(cform.Maturity.value);
        Meteor.call('saveOffer', offer);
		cc.hideForm();
        cleanOfferForm();
    }
});