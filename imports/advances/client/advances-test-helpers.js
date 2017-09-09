import faker from 'faker';

export function fakeData() {
    return {    
        OfferId: faker.random.number(100000),
        CreditorId: faker.random.number(100000),
        DebtorId: faker.random.number(100000),
        InvoiceNumber: faker.random.number(100000),
    };
}