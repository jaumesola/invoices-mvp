import '/imports/client/crud_imports.js';
import * as crud from '/imports/client/crud.js';
import './companies.html';
import '../companies-meteor.js';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;
crud.init(CompaniesConfig);