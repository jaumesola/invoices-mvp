export const config = {
    collectionName: 'settings',
    subscription: 'theSettings',
    modelName: 'Settings',
    modelFields: {
        Environment: { type: String, },
        Local: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        Core: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },        
        Timeouts: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        Creditor: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        Invoice: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        Factor: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        WhiteList: {
            type: [String],
            cast(value) { return JSON.parse(value); },
        },
        BlackList: {
            type: [String],
            cast(value) { return JSON.parse(value); },
        },
    },
    formFields: [
        { id: 'Environment', label: 'Environment', tag: 'input', colClass: 'm12' },
        { id: 'Local',  },
        { id: 'Core',  },        
        { id: 'Timeouts',  },        
        { id: 'Creditor',  },
        { id: 'Invoice',   },
        { id: 'Factor',    },
        { id: 'WhiteList', },
        { id: 'BlackList', },
    ]
}