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
CompaniesConfig['fillForm'] = function (doc) {
    document.getElementById("TaxId").value  = doc.TaxId;
    document.getElementById("Name").value   = doc.Name;
    document.getElementById("Rating").value = doc.Rating; 
}

cc.crudInit(CompaniesConfig);

Template.companies.onRendered( function () {
    cc.templateOnRendered(CompaniesConfig);
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