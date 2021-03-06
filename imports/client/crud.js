export function init(config) {

    config.template.helpers({

        'colfields': function () {
            return config.colFields;
        },
        'docs': function () {
             return config.collection.find();
         },
         'field': function (doc, field) {
             return doc[field];
         }, 
         'h2': config.collectionName,
     });
    
    config.template.events({
        'click .cb-row': function () {
            Session.set('selectedDocId', this.doc._id);
            hideForm();
            showEditRemoveButtons();
        },
        'click .create': function () {
            config.cleanForm();
            showForm();
            hideEditRemoveButtons();
            Session.set('selectedDocId', null);    
        },
        'click .edit': function () {
            showForm();
            var doc = config.findSelectedDoc();
            config.fillFormFromDoc(doc);          
        },
        'click .remove': function () {
            Meteor.call(config.removeMethod, config.getDoc(config));
            hideForm();
            hideEditRemoveButtons();
        }
    });
    
    config.template.onRendered(function () {
        templateOnRendered(config);
    });
    
    config.editFormTemplate.events({
        'submit form': function (event) {
            //config.submitForm(event);
            event.preventDefault();
            var doc = config.getDoc(config);
            config.fillDocFromForm(doc);
            Meteor.call(config.saveMethod, doc);
            hideForm();
            config.cleanForm();
        }
    });
    
    config.findSelectedDoc = function () {
        return config.model.findOne({_id: Session.get('selectedDocId')});
    }
    
    //return currently selected document object or if none a newly created one
    config.getDoc = function (config) {
        config.lastDoc = (Session.get('selectedDocId') == null)?
            new config.model() : config.findSelectedDoc(config);
        return config.lastDoc;
    }

    config.iterateFormFields = function (callback) {
        for (var i = 0; i < config.formFields.length; i++) {
            var field = config.formFields[i].id;
            callback(field);
        }
    }
    
    config.cleanForm = function () {
        config.iterateFormFields( function (field) {
            config.dataForm.elements[field].value = null;
        });
    }
    
    config.fillDocFromForm = function (doc) {
        for (var i = 0; i < config.formFields.length; i++) {
            var field = config.formFields[i].id;
            doc.set(field, config.dataForm.elements[field].value, {
                cast: true // Astronomy will properly transform values from form
            }); 
        }
    }
    
    config.fillFormFromDoc = function (doc) {
        for (let i = 0; i < config.formFields.length; i++) {
            let field  = config.formFields[i].id;
            let format = config.formFields[i].format;
            let value  = doc[field];
            if (typeof value == "object" || typeof value == "array") {
                value = JSON.stringify(value, null, 2);
            }
            document.getElementById(field).value = format ? format(value) : value;
        }
    }
    
    Meteor.subscribe(config.subscription);
}

export const templateOnRendered = function templateOnRendered(config) { 
    Session.set('selectedDocId', null);
    config.dataForm = document.getElementById("dataForm");
}

export const showForm = function showForm() {
    $('#dataForm').show();
}

export const hideForm = function hideForm() {
    $('#dataForm').hide();
}

export const showEditRemoveButtons = function showEditRemoveButtons() {
    $('.edit').show();
    $('.remove').show();
}

export const hideEditRemoveButtons = function showEditRemoveButtons() {
    $('.edit').hide();
    $('.remove').hide();
}