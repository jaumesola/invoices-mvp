import '/imports/companies/companies.js';
import '/imports/companies/client/companies.html';

Meteor.subscribe('theCompanies');

Template.companies.helpers({
    'company': function(){
        return Companies.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedCompanyId')){
            return "selected"
        }
    },
        
    'selectedCompany': function(){
        return Companies.findOne({ _id: Session.get('selectedCompanyId') });
        }
});

Template.companies.onRendered(function () {
	cform = document.getElementById("companyForm");
});

function cleanCompanyForm() {
    cform.TaxId.value  = "";
    cform.Name.value   = "";
    cform.Rating.value = 0;
}

function showForm() {
    $( cform ).show();
}

function hideForm() {
    $( cform ).hide();	
}

// return currently selected company object or if none a newly created one
function getCompany() {
    if (Session.get('selectedCompanyId') == null) { 
    		return new Company();
    } else {
        return Company.findOne({_id: Session.get('selectedCompanyId')});
    }
}

Template.companies.events({
    'click .company': function(){
    		Session.set('selectedCompanyId', this._id);
    		hideForm();
    },
    'click .create': function(){
        cleanCompanyForm();
        showForm();
    		Session.set('selectedCompanyId', null);
    },    
    'click .edit': function(){
		showForm();
		var c = Template.companies.__helpers.get("selectedCompany").call();
		document.getElementById("TaxId").value  = c.TaxId;
		document.getElementById("Name").value   = c.Name;
		document.getElementById("Rating").value = c.Rating;
    },
    'click .remove': function(){
        Meteor.call('removeCompany', getCompany());
		hideForm();
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
		hideForm();
        cleanCompanyForm();
    }
});