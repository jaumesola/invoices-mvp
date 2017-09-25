import faker from 'faker';

export function fakeData() {
    
    function fakeMaturity() {
        var d = new Date();
        d.setDate(d.getDate() + (8 + faker.random.number(350)));
        return d.toString();
    }
    
    function fakeStatus() {
        var statusCodes = ["NOT_NOW","OFFER_OK"]; // TODO DRY move to single location
        return statusCodes[faker.random.number(statusCodes.length)];
    }
    
    return {    
        Amount: faker.random.number(100000),
        Maturity: fakeMaturity(),
        Status: fakeStatus(),
    };
}