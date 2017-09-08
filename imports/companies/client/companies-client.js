import '/imports/client/crud.html';
import './companies.html';
import '../companies.js';
import * as crud from '/imports/client/crud.js';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;
CompaniesConfig.formFields = ['TaxId','Name','Rating'];
CompaniesConfig.cleanForm = function () {
    this.dataForm.TaxId.value  = "";
    this.dataForm.Name.value   = "";
    this.dataForm.Rating.value = 0;
}
CompaniesConfig.fillForm = function (doc) {
    document.getElementById("TaxId").value  = doc.TaxId;
    document.getElementById("Name").value   = doc.Name;
    document.getElementById("Rating").value = doc.Rating; 
}

crud.init(CompaniesConfig);