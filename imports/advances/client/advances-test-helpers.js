import faker from 'faker';

export function fakeDoc(config) {
    
    function fakeStatus() { // TODO: DRY, unify with Offers.fakeDoc()
        var statusCodes = config.modelFields.Status.validators[0].param;
        return statusCodes[faker.random.number(statusCodes.length-1)];
    }
    
    return {    
        OfferId: faker.random.number(100000),
        CreditorId: faker.random.number(100000),
        DebtorId: faker.random.number(100000),
        InvoiceNumber: faker.random.number(100000),
        Status: fakeStatus(),
    };
}