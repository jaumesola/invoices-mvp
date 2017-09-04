import '/imports/offers/offers.js';
import * as cc from '/imports/client/common.js';
import '/imports/client/common.html';
import '/imports/offers/client/offers.html';

OffersConfig['template'] = Template.offers;
OffersConfig['cleanForm'] = function () {
    cform.Amount.value    = null;
    cform.Maturity.value  = null;   
}

Meteor.subscribe(OffersConfig.subscription);

Template.offers.onCreated( function () {
    cc.templateOnCreated(OffersConfig);
});

Template.offers.onRendered( function () {
    cc.templateOnRendered(OffersConfig);
});

Template.offers.events({
  
    'click .edit': function(){
		cc.showForm();
		var c = Template.crudButtons.__helpers.get("selectedDoc").call();
		document.getElementById("Amount").value  = c.Amount;
		document.getElementById("Maturity").value   = c.Maturity;
    },
    'click .remove': function(){
        Meteor.call('removeOffer', cc.getDoc(OffersConfig));
		cc.hideForm();
        cc.hideEditRemoveButtons();
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
        OffersConfig.cleanForm();
    }
});