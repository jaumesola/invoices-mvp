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
        }
    },
    formFields: ['Amount', 'Maturity']
}