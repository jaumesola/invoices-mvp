import '/imports/client/crud.html';
import './advances.html';
import '../advances-meteor.js';
import * as crud from '/imports/client/crud.js';

AdvancesConfig.template = Template.advances;
AdvancesConfig.editFormTemplate = Template.editAdvanceForm;
AdvancesConfig.cleanForm = function () {
    // TODO loop for all fields
    this.dataForm.OfferId.value        = null;
    this.dataForm.CreditorId.value     = null;
    this.dataForm.DebtorId.value       = null;
    this.dataForm.InvoiceNumber.value  = null;
}
AdvancesConfig.fillForm = function (doc) {
    // TODO loop for all fields 
    document.getElementById("OfferId").value = doc.OfferId;
}

crud.init(AdvancesConfig);
