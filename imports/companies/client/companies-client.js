import '/imports/client/crud.html';
import './companies.html';
import '../companies-meteor.js';
import * as crud from '/imports/client/crud.js';

CompaniesConfig.template = Template.companies;
CompaniesConfig.editFormTemplate = Template.editCompanyForm;

crud.init(CompaniesConfig);