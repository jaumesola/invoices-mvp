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
        Status: {
            type: String,
            validators: [{
                type: 'choice',
                // Note that this array is used by fakeData() in advances-test-helpers.js                
                param: ["CLEAR_RISK",
                    "ASK_CRED_DATA","WAIT_CRED_DATA","ASK_CRED_SIGN",
                    "WAIT_CRED_SIGN","ASK_DEBT_SIGN","WAIT_DEBT_SIGN",
                    "SEND_FUNDS_CRED", "SEND_FUNDS_CRED", "WAIT_FUNDS_DEBT",
                    "COMPLETED", "UNPAID", "LATE_PAID"],
            }]
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
    formFields: ['OfferId','CreditorId','DebtorId','InvoiceNumber','Status']
};