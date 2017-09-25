import faker from 'faker';

export function fakeData(config) {
    return {    
        TaxId: faker.phone.phoneNumberFormat(),
        Name: faker.company.companyName() + ' ' + faker.company.companySuffix(),
        Rating: faker.random.number(10),
    };
}