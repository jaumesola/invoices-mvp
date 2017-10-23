export const config = {
    collectionName: 'settings',
    subscription: 'theSettings',
    modelName: 'Settings',
    modelFields: {
    	environment: { type: String, },
        creditor: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        invoice: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
        factor: {
            type: Object,
            cast(value) { return JSON.parse(value); },
        },
    },
    formFields: [
        { id: 'environment', label: 'environment', tag: 'input', colClass: 'm6' },
        { id: 'creditor', label: 'creditor', tag: 'input', colClass: 'm2' },
        { id: 'invoice',  label: 'invoice',  tag: 'input', colClass: 'm2' },
        { id: 'factor',   label: 'factor',   tag: 'input', colClass: 'm2' },
    ]
}