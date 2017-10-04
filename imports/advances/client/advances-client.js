import '/imports/client/crud_imports.js';
import * as crud from '/imports/client/crud.js';
import '/imports/client/status.html';
import './advances.html';
import '../advances-meteor.js';

AdvancesConfig.template = Template.advances;
AdvancesConfig.editFormTemplate = Template.editAdvanceForm;
crud.init(AdvancesConfig);

/* TODO: DRY: unify offerStatusSelector & advanceStatusSelector */
Template.advanceStatusSelector.helpers({
    statusoptions() {
        var r = AdvancesConfig.modelFields.Status.validators[0].param;
        r =  r.map(function (element) {
            return { code: element };
        })
        //console.log(r);
        return r;
    },
 });