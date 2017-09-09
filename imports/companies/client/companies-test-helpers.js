import faker from 'faker';

export function fakeData() {
    return {    
        TaxId: faker.phone.phoneNumberFormat(),
        Name: faker.company.companyName() + ' ' + faker.company.companySuffix(),
        Rating: faker.random.number(10),
    };
}