import { Class as Model } from 'meteor/jagi:astronomy';
import * as mm from '/imports/_common/meteor-methods.js';

OffersConfig = {
    collectionName: 'offers',
    modelName: 'Offer',
    subscription: 'theOffers',
}

OffersConfig.collection = new Mongo.Collection(OffersConfig.collectionName);

var maturityRange = [{
    type: 'gte',
    resolveParam: function() {
        var d = new Date();
        d.setDate(d.getDate() + 7); // minimum 1 week
        return d;
    }
  }, {
    type: 'lte',
    resolveParam: function() {
        var d = new Date();
        d.setDate(d.getDate() + 365); // maximum 1 year
        return d;
    }
  }];

OffersConfig.model = Model.create({
    name: OffersConfig.modelName,
    collection: OffersConfig.collection,
    fields: {
        Amount: {
            type: Number,
            validators: [
                { type: 'gte', param: 0 },
                { type: 'lte', param: 100000 }
            ]
        },
        Maturity: {
            type: Date,
            validators: maturityRange
        }
    }
});

mm.init(OffersConfig);