export function init(config) {
    
    Template.crudButtons.helpers({
        'selectedDoc': function () {
            return config.findOneDocument({_id: Session.get('selectedDocId')});
        }
    });
    
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
            console.log('clicked edit');
            showForm();
            var doc = config.findOneDocument({_id: Session.get('selectedDocId')});;
            config.fillForm(doc);
        },
        'click .remove': function(){
            Meteor.call('remove' + config.modelName, getDoc(config));
            hideForm();
            hideEditRemoveButtons();
        }
    });
    
    config.template.onRendered( function () {
        templateOnRendered(config);
    });
    
    config.editFormTemplate.events({
        'submit form': function (event) {
            //config.submitForm(event);
            event.preventDefault();
            var doc = getDoc(config);
            config.fillDoc(doc)
            Meteor.call(config.saveMethod, doc);
            hideForm();
            config.cleanForm();
        }
    });
    
    Meteor.subscribe(config.subscription);
}

export const showForm = function showForm() {
    $(cform).show();
}

export const hideForm = function hideForm() {
    $(cform).hide();
}

export const showEditRemoveButtons = function showEditRemoveButtons() {
    $('.edit').show();
    $('.remove').show();
}

export const hideEditRemoveButtons = function showEditRemoveButtons() {
    $('.edit').hide();
    $('.remove').hide();
}

export const templateOnRendered = function templateOnRendered(config) {  
    Session.set('selectedDocId', null);
    cform = document.getElementById("docForm");
}

//return currently selected document object or if none a newly created one
export const getDoc = function getDoc(config) {
    if (Session.get('selectedDocId') == null) { 
        return config.newDocument();
    } else {
        return config.findOneDocument({_id: Session.get('selectedDocId')});
    }
}