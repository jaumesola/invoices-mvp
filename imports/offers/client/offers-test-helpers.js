import faker from 'faker';

export function fakeDoc(config) {
    
    function fakeMaturity() {
        var d = new Date();
        d.setDate(d.getDate() + (8 + faker.random.number(350)));
        return d;
    }
    
    function fakeStatus() { // TODO: DRY, unify with Advances.fakeDoc()
        var statusCodes = config.modelFields.Status.validators[0].param;
        return statusCodes[faker.random.number(statusCodes.length-1)];
    }
    
    return {    
        Amount: faker.random.number(100000),
        Maturity: fakeMaturity(),
        Status: fakeStatus(),
    };
}