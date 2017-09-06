import * as Errors from './errors.js';

export function init(config) {
    config.saveMethod = 'save' + config.modelName;
    config.removeMethod = 'remove' + config.modelName;
    
    var methods = {};
    methods[config.saveMethod] = saveDoc;
    methods[config.removeMethod] = removeDoc;
    Meteor.methods(methods);
}

export function saveDoc (doc) {
    if ( !Meteor.userId() ) {
       return;
    }
    try {
        doc.save();
    } catch (e) {
        Errors.handle(e);
    }
}

export function removeDoc (doc) {
    if ( !Meteor.userId() ) {
            return;
    }
    doc.remove();        
}