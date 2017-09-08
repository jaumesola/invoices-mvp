import * as Companies from '/imports/companies/companies.js';
import * as MeteorMethods from '/imports/_common/meteor-methods.js';
CompaniesConfig = Companies.config; 
MeteorMethods.init(CompaniesConfig);