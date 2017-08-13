console.log("Hello companies client");

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
    company.Id    = Session.get('selectedCompanyId');
    company.TaxId = String(cform.companyTaxId.value);
    company.Name  = String(cform.companyName.value);
    return company;
}

function cleanCompanyForm() {
    cform.companyTaxId.value = "";
    cform.companyName.value = "";
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
		document.getElementById("companyTaxId").value = c.companyTaxId;
		document.getElementById("companyName").value  = c.companyName;
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

console.log("Bye companies client");