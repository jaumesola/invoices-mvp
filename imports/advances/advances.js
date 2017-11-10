export const config = {
    collectionName: 'advances',
    subscription: 'theAdvances', 
    modelName: 'Advance',
    
    valiDate: function() {
        
    },
    modelFields: { // TODO add indexes TODO add validators TODO DRY - duplication with offers
        OfferId: {
            type: String, // TODO specific ID type? TODO link to Offer Id           
        },
        // TODO DRY - lots of duplication with offers
        AdvanceDate: {
            type: Date,
            validators: []  // TODO add check prior to InvoiceMaturity
        },
        AdvanceAmount: {
            type: Number,
            validators: [   // TODO add check not higher than to InvoiceAmount
                { type: 'gte', param: 1 },
                { type: 'lte', param: 100000 }
            ]
        },
        CreditorTaxId: {
            type: String, // TODO specific type? TODO link to Creditor Tax Id           
        }, 
        CreditorName: {
            type: String,        
        },        
        DebtorTaxId: {
            type: String, // TODO specific type? TODO link to Debtor Tax Id           
        },
        DebtorName: {
            type: String,      
        },  
        InvoiceNumber: {
            type: String,        
        }, 
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
        Status: {
            type: String,
            validators: [{
                type: 'choice',
                // Note that this array is used by fakeDoc() in advances-test-helpers.js                
                param: ["CLEAR_RISK",
                    "ASK_CRED_DATA","WAIT_CRED_DATA","ASK_CRED_SIGN",
                    "WAIT_CRED_SIGN","ASK_DEBT_SIGN","WAIT_DEBT_SIGN",
                    "SEND_FUNDS_CRED", "WAIT_FUNDS_DEBT",
                    "COMPLETED", "UNPAID", "LATE_PAID"],
            }]
        },
        StatusMessage: {
            type: String,        
        }, 
        PaymentMethodId: {
            type: Number,        
        }, 
        PaymentMethodName: {
            type: String,        
        }, 
        CollectionData: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },        
        InvoiceData: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        UserData: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        CreditorData: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        DebtorData: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
    },
    // part of client side, but convenient to have here for functional tests
    formFields: [ 
        { id: 'OfferId',}, 
        { id: 'AdvanceDate',     label: 'Date',           tag: 'input',  colClass: 'm1', type: 'date', format: globalFormatDate },
        { id: 'AdvanceAmount',   label: 'Advance amount', tag: 'input',  colClass: 'm1'},        
        { id: 'CreditorTaxId',   label: 'Creditor',       tag: 'input',  colClass: 'm1'},
        { id: 'CreditorName',                             tag: 'input',  colClass: 'm2'},        
        { id: 'DebtorTaxId',     label: 'Debtor',         tag: 'input',  colClass: 'm1'},
        { id: 'DebtorName',                               tag: 'input',  colClass: 'm2'},
        { id: 'InvoiceNumber',   label: 'Invoice number', tag: 'input',  colClass: 'm1'},       
        { id: 'InvoiceAmount',   label: 'Invoice amount', tag: 'input',  colClass: 'm1'},
        { id: 'InvoiceMaturity', label: 'Maturity',       tag: 'input',  colClass: 'm1', type: 'date', format: globalFormatDate },      
        { id: 'Status',          label: 'Status',         tag: 'select', colClass: 'm1'},   
        { id: 'StatusMessage', },
        { id: 'PaymentMethodId', },
        { id: 'PaymentMethodName', },    
        { id: 'CollectionData', },
        { id: 'InvoiceData', },
        { id: 'UserData', },
        { id: 'CreditorData', },
        { id: 'DebtorData', },
        ],
};