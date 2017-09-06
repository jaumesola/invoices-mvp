import '../companies.js';
import * as crud from '/imports/client/crud.js';
import '/imports/client/crud.html';
import './companies.html';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;
CompaniesConfig.cleanForm = function () {
    cform.TaxId.value  = "";
    cform.Name.value   = "";
    cform.Rating.value = 0;
}
CompaniesConfig.fillForm = function (doc) {
    document.getElementById("TaxId").value  = doc.TaxId;
    document.getElementById("Name").value   = doc.Name;
    document.getElementById("Rating").value = doc.Rating; 
}
CompaniesConfig.fillDoc = function (doc) {
    doc.TaxId  = cform.TaxId.value;
    doc.Name   = cform.Name.value;
    doc.Rating = Number(cform.Rating.value);    
}

crud.init(CompaniesConfig);