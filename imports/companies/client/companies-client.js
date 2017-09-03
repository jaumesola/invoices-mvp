import '/imports/companies/companies.js';
import * as cc from '/imports/client/common.js';
import '/imports/companies/client/companies.html';

Meteor.subscribe('theCompanies');

Template.companies.helpers({
    'company': function(){
        return Companies.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedDocId')){
            return "selected"
        }
    },
        
    'selectedDoc': function(){
        return Companies.findOne({ _id: Session.get('selectedDocId') });
        }
});

Template.companies.onRendered(cc.templateOnRendered);

function cleanCompanyForm() {
    cform.TaxId.value  = "";
    cform.Name.value   = "";
    cform.Rating.value = 0;
}

// return currently selected company object or if none a newly created one
function getCompany() {
    if (Session.get('selectedDocId') == null) { 
    		return new Company();
    } else {
        return Company.findOne({_id: Session.get('selectedDocId')});
    }
}

Template.companies.events({
    'click .company': function(){
    		Session.set('selectedDocId', this._id);
    		cc.hideForm();
    },
    'click .create': function(){
        cleanCompanyForm();
        cc.showForm();
    		Session.set('selectedDocId', null);
    },    
    'click .edit': function(){
		cc.showForm();
		var c = Template.companies.__helpers.get("selectedDoc").call();
		document.getElementById("TaxId").value  = c.TaxId;
		document.getElementById("Name").value   = c.Name;
		document.getElementById("Rating").value = c.Rating;
    },
    'click .remove': function(){
        Meteor.call('removeCompany', getCompany());
		cc.hideForm();
    }
});

Template.editCompanyForm.events({
    'submit form': function(event){
        event.preventDefault();
        var company = getCompany();
        // TODO: make generic
        company.TaxId  = cform.TaxId.value;
        company.Name   = cform.Name.value;
        company.Rating = Number(cform.Rating.value);
        Meteor.call('saveCompany', company);
		cc.hideForm();
        cleanCompanyForm();
    }
});