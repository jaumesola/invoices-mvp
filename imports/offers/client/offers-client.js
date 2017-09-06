import '../offers.js';
import * as crud from '/imports/client/crud.js';
import '/imports/client/crud.html';
import './offers.html';

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
OffersConfig.fillDoc = function (doc) {
    doc.Amount   = Number(cform.Amount.value);
    doc.Maturity = new Date(cform.Maturity.value);  
}

crud.init(OffersConfig);