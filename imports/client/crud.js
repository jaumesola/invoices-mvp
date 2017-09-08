export function init(config) {

    config.template.helpers({
        'datarow': function () {
             return config.collection.find();
         },
        'selected': function () {
             if(this._id == Session.get('selectedDocId')){
                 return "selected";
             }
         }
     });
    
    config.template.events({
        'click .datarow': function () {
            Session.set('selectedDocId', this._id);
            hideForm();
            showEditRemoveButtons();
        },
        'click .create': function () {
            config.cleanForm();
            showForm();
            hideEditRemoveButtons();
            Session.set('selectedDocId', null);    
        },
        'click .edit': function (fillForm) {
            showForm();
            var doc = config.findSelectedDoc();
            config.fillFormFromDoc(doc);
        },
        'click .remove': function () {
            Meteor.call(config.removeMethod, config.getDoc());
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
            var doc = config.getDoc();
            console.log(doc);
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
    config.getDoc = function () {
        if (Session.get('selectedDocId') == null) { 
            return new config.model();
        } else {
            return config.findSelectedDoc();
        }
    }

    config.iterateFormFields = function (callback) {
        for (var i = 0; i < config.formFields.length; i++) {
            var field = config.formFields[i];
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
            var field = config.formFields[i];
            doc.set(field, config.dataForm.elements[field].value, {
                cast: true // Astronomy will properly transform values from form
            }); 
        }
    }
    
    config.fillFormFromDoc = function (doc) {
        for (var i = 0; i < AdvancesConfig.formFields.length; i++) {
            var field = config.formFields[i];
            document.getElementById(field).value = doc[field];
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