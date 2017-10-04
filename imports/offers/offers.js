export const config = {
    collectionName: 'offers',
    subscription: 'theOffers', 
    modelName: 'Offer',
    modelFields: {
        Amount: {
            type: Number,
            validators: [
                { type: 'gte', param: 0 },
                { type: 'lte', param: 100000 }
            ]
        },
        Maturity: {
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
        Status: {
            type: String,
            validators: [{
                type: 'choice',
                // Note that this array is used by fakeData() in offers-test-helpers.js                
                param: ["NOT_NOW","OFFER_OK"],
            }]
        },
    },
    formFields: [
        {id: 'Amount',   label: 'Amount' ,  tag: 'input',  colClass: 'm4'},
        {id: 'Maturity', label: 'Maturity', tag: 'input',  colClass: 'm4'},
        {id: 'Status',   label: 'Status',   tag: 'select', colClass: 'm4'},
        ],
}