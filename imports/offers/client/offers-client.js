import '/imports/client/crud.html';
import './offers.html';
import '../offers-meteor.js';
import * as crud from '/imports/client/crud.js';

OffersConfig.template = Template.offers;
OffersConfig.editFormTemplate = Template.editOfferForm;

crud.init(OffersConfig);