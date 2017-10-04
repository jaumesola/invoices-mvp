export const config = {
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
    },
    formFields: [
        { id: 'TaxId',  label: 'Tax Id' , tag: 'input', colClass: 'm4' },
        { id: 'Name',   label: 'Name',    tag: 'input', colClass: 'm4' },
        { id: 'Rating', label: 'Rating' , tag: 'input', colClass: 'm4' },
        ]
}