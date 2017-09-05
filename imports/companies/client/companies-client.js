import '/imports/companies/companies.js';
import * as cc from '/imports/client/common.js';
import '/imports/client/common.html';
import '/imports/companies/client/companies.html';

CompaniesConfig['template'] = Template.companies;
CompaniesConfig['cleanForm'] = function () {
    cform.TaxId.value  = "";
    cform.Name.value   = "";
    cform.Rating.value = 0;
}

cc.crudInit(CompaniesConfig);

Template.companies.onCreated( function () {
    cc.templateOnCreated(CompaniesConfig);
});

Template.companies.onRendered( function () {
    cc.templateOnRendered(CompaniesConfig);
});

Template.companies.events({  
    'click .edit': function(){
		cc.showForm();
		var c = Template.crudButtons.__helpers.get("selectedDoc").call();
		document.getElementById("TaxId").value  = c.TaxId;
		document.getElementById("Name").value   = c.Name;
		document.getElementById("Rating").value = c.Rating;
    }
});

Template.editCompanyForm.events({
    'submit form': function(event){
        event.preventDefault();
        var company = cc.getDoc(CompaniesConfig);
        // TODO: make generic
        company.TaxId  = cform.TaxId.value;
        company.Name   = cform.Name.value;
        company.Rating = Number(cform.Rating.value);
        Meteor.call('saveCompany', company);
		cc.hideForm();
		CompaniesConfig.cleanForm();
    }
});