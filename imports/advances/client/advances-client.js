import '/imports/client/crud.html';
import './advances.html';
import '../advances.js';
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
AdvancesConfig.fillDoc = function (doc) {
    // TODO loop for all fields 
    // TODO transformations -- how does Astronomy do them?
    doc.OfferId = this.dataForm.OfferId.value;
}

crud.init(AdvancesConfig);