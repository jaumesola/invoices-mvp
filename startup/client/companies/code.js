Meteor.subscribe('theCompanies');

Template.companies.helpers({
    'company': function(){
        return CompaniesList.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedCompanyId')){
            return "selected"
        }
    },
        
    'selectedCompany': function(){
        return CompaniesList.findOne({ _id: Session.get('selectedCompanyId') });
        }
});

Template.companies.onRendered(function () {
	cform = document.getElementById("companyForm");
});

function companyObjectFromForm() {
    var company = new Object();
    company.Id     = Session.get('selectedCompanyId');
    company.TaxId  = String(cform.TaxId.value);
    company.Name   = String(cform.Name.value);
    company.Rating = Number(cform.Rating.value);
    return company;
}

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
		var selectedCompanyId = Session.get('selectedCompanyId');
        Meteor.call('removeCompany', selectedCompanyId);
		hideForm();
    }
});

Template.editCompanyForm.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.call('createUpdateCompany', companyObjectFromForm());
		hideForm();
        cleanCompanyForm();
    }
});