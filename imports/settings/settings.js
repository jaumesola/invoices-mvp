export const config = {
    collectionName: 'settings',
    subscription: 'theSettings',
    modelName: 'Settings',
    modelFields: {
        Environment: { type: String, },
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
        { id: 'Environment', label: 'Environment', tag: 'input', colClass: 'm2' },
        { id: 'Creditor', label: 'Creditor', tag: 'input', colClass: 'm2' },
        { id: 'Invoice',  label: 'Invoice',  tag: 'input', colClass: 'm2' },
        { id: 'Factor',   label: 'Factor',   tag: 'input', colClass: 'm2' },
        { id: 'WhiteList',   label: 'White list',   tag: 'input', colClass: 'm2' },
        { id: 'BlackList',   label: 'Black list',   tag: 'input', colClass: 'm2' },
    ]
}