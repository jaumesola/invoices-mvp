export const config = {
    collectionName: 'offers',
    subscription: 'theOffers', 
    modelName: 'Offer',
    modelFields: {
        InvoiceAmount: {
            type: Number,
            validators: [
                { type: 'gte', param: 1 },
                { type: 'lte', param: 100000 }
            ]
        },
        InvoiceMaturity: {
            type: Date,
            validators: [{
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
              }]
        },
        OfferAmount: {
            type: Number,
            optional: true, // TODO should be not null if Status == 'OFFER_OK'
            validators: [   // TODO add check not higher than to InvoiceAmount
                { type: 'gte', param: 1 },
                { type: 'lte', param: 100000 }
            ]
        },
        OfferDate: {
            type: Date,
            optional: true, // TODO should be not null if Status == 'OFFER_OK'
            validators: []  // TODO add check prior to InvoiceMaturity
        },
        Status: {
            type: String,
            validators: [{
                type: 'choice',
                // Note that this array is used by fakeDoc() in offers-test-helpers.js                
                param: ["NOT_NOW","OFFER_OK"],
            }]
        },
    },
    formFields: [
        {id: 'InvoiceAmount',   label: 'Invoice amount' ,  tag: 'input',  colClass: 'm2'},
        {id: 'InvoiceMaturity', label: 'Invoice maturity', tag: 'input',  colClass: 'm2', type: 'date', format: function(x) {return x.toISOString().split('T')[0];} },
        {id: 'Status',          label: 'Status',           tag: 'select', colClass: 'm2'},        
        {id: 'OfferAmount',     label: 'Offer amount',     tag: 'input',  colClass: 'm2'},
        {id: 'OfferDate',       label: 'Offer date',       tag: 'input',  colClass: 'm4', type: 'date', format: function(x) {return x.toISOString().split('T')[0];} }, // TODO Unifiy this formatting into a global function
        ],
}