import faker from 'faker';

export function fakeData() {
    
    function fakeMaturity() {
        var d = new Date();
        d.setDate(d.getDate() + (8 + faker.random.number(350)));
        return d.toString();
    }
    
    return {    
        Amount: faker.random.number(100000),
        Maturity: fakeMaturity(),
    };
}