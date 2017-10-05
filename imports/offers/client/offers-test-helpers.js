import faker from 'faker';

export function fakeDoc(config) {
    
    function fakeMaturity() {
        let d = new Date();
        d.setDate(d.getDate() + (8 + faker.random.number(350)));
        return d;
    }
    
    function fakeStatus() { // TODO: DRY, unify with Advances.fakeDoc()
        let statusCodes = config.modelFields.Status.validators[0].param;
        return statusCodes[faker.random.number(statusCodes.length-1)];
    }
    
    let InvoiceAmount   = faker.random.number(100000);
    let InvoiceMaturity = fakeMaturity();
    let Status          = fakeStatus();
    let discount        = faker.finance.amount({min:0, max:10});
    let OfferAmount     = (InvoiceAmount * (100 - discount))/100;
    let OfferDate       = new Date();
    
    return { InvoiceAmount, InvoiceMaturity, Status, OfferAmount, OfferDate };
}