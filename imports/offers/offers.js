import { Class as Model } from 'meteor/jagi:astronomy';
import * as Errors from '/imports/_common/errors.js';

OffersConfig = {
    collectionName: 'offers',
    newDocument: function () {
        return new Offer();
    },
    findOneDocument: function (condition) {
        return Offer.findOne(condition);
     }   
}

Offers = new Mongo.Collection('offers');

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

Offer = Model.create({
    name: 'Offer',
    collection: Offers,
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

Meteor.methods({
    'saveOffer': function(offer){
        if ( !Meteor.userId() ) {
        	    return;
        }

        try {
        		offer.save();
        } catch (e) {
        		Errors.handle(e);
        }
    },
    
    'removeOffer': function(offer){
        if ( !Meteor.userId() ) {
    	        return;
        }
        offer.remove();
    }

});