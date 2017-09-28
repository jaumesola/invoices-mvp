import '/imports/client/crud.html';
import './offers.html';
import '../offers-meteor.js';
import * as crud from '/imports/client/crud.js';

OffersConfig.template = Template.offers;
OffersConfig.editFormTemplate = Template.editOfferForm;

crud.init(OffersConfig);

OffersConfig.editFormTemplate.helpers({
    statusoptions() {
        var r = OffersConfig.modelFields.Status.validators[0].param;
        r =  r.map(function (element) {
            return { code: element }; 
        })
        //console.log(r);
        return r;
    },
 });