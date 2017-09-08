import '/imports/client/crud.html';
import './advances.html';
import '../advances-meteor.js';
import * as crud from '/imports/client/crud.js';

AdvancesConfig.template = Template.advances;
AdvancesConfig.editFormTemplate = Template.editAdvanceForm;

crud.init(AdvancesConfig);