import * as mm from '/imports/_common/meteor-methods.js';

CompaniesConfig = {
    collectionName: 'companies',
    subscription: 'theCompanies',
    modelName: 'Company',
    modelFields: {
        TaxId: {
            type: String,
            validators: [
                { type: 'minLength', param: 5 },
                { type: 'maxLength', param: 25 }
        ]},
        Name: {
            type: String,
            validators: [
                { type: 'minLength', param: 5 },
                { type: 'maxLength', param: 100 }
        ]},
        Rating: {
            type: Number,
            validators: [
                { type: 'gte', param: 0 },
                { type: 'lte', param: 10 }
        ]}
    }
}

mm.init(CompaniesConfig);