export const config = {
    collectionName: 'advances',
    subscription: 'theAdvances', 
    modelName: 'Advance',
    modelFields: { // TODO add indexes TODO add validators
        OfferId: {
            type: String, // TODO specific ID type? TODO link to Offer Id           
        },
        CreditorId: {
            type: String, // TODO specific ID type? TODO link to Company Id           
        }, 
        InvoiceNumber: {
            type: String, // TODO specific type? (will depend on CRM...)     
        },      
        DebtorId: {
            type: String, // TODO specific ID type? TODO link to Company Id           
        },
        /*
        CreditorData {
            type: Object, // TODO specific object type?
        },
        DebtorData {
            type: Object, // TODO specific object type?
        },
        InvoiceData {
            type: Object, // TODO specific object type?
        },
        */ 
    },
    // part of client side, but convenient to have here for functional tests
    formFields: ['OfferId','CreditorId','DebtorId','InvoiceNumber']
};