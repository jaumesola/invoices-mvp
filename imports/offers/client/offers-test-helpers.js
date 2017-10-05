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
    let discount        = faker.random.number(10);
    let OfferAmount     = null;
    let OfferDate       = null;
    if (Status == 'OFFER_OK') {
        OfferAmount     = Math.round(InvoiceAmount * (100 - discount) / 100);
        OfferDate       = new Date();        
    };
    
    console.log('fake offer'); console.log(discount); console.log({ InvoiceAmount, InvoiceMaturity, Status, OfferAmount, OfferDate });
    
    return { InvoiceAmount, InvoiceMaturity, Status, OfferAmount, OfferDate };
}