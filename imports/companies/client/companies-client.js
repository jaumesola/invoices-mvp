import '/imports/client/crud.html';
import './companies.html';
import '../companies-meteor.js';
import * as crud from '/imports/client/crud.js';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;
CompaniesConfig.cleanForm = function () {
    this.dataForm.TaxId.value  = "";
    this.dataForm.Name.value   = "";
    this.dataForm.Rating.value = 0;
}

crud.init(CompaniesConfig);