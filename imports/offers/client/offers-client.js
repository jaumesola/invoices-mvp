import '/imports/offers/offers.js';
import * as crud from '/imports/client/crud.js';
import '/imports/client/common.html';
import '/imports/offers/client/offers.html';

OffersConfig.template = Template.offers;
OffersConfig.editFormTemplate = Template.editOfferForm;
OffersConfig.cleanForm = function () {
    cform.Amount.value    = null;
    cform.Maturity.value  = null;   
}
OffersConfig.fillForm = function (doc) {
    document.getElementById("Amount").value = doc.Amount;
    document.getElementById("Maturity").value = doc.Maturity;
}
OffersConfig.submitForm = function (event) {
    event.preventDefault();
    var offer = cc.getDoc(OffersConfig);
    // TODO: make generic
    offer.Amount   = Number(cform.Amount.value);
    offer.Maturity = new Date(cform.Maturity.value);
    Meteor.call('saveOffer', offer);
    cc.hideForm();
    OffersConfig.cleanForm();  
}

crud.init(OffersConfig);