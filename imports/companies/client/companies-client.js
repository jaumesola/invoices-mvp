import '../companies.js';
import * as crud from '/imports/client/crud.js';
import '/imports/client/crud.html';
import './companies.html';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;
CompaniesConfig.cleanForm = function () {
    dataForm.TaxId.value  = "";
    dataForm.Name.value   = "";
    dataForm.Rating.value = 0;
}
CompaniesConfig.fillForm = function (doc) {
    document.getElementById("TaxId").value  = doc.TaxId;
    document.getElementById("Name").value   = doc.Name;
    document.getElementById("Rating").value = doc.Rating; 
}
CompaniesConfig.fillDoc = function (doc) {
    doc.TaxId  = dataForm.TaxId.value;
    doc.Name   = dataForm.Name.value;
    doc.Rating = Number(dataForm.Rating.value);    
}

crud.init(CompaniesConfig);