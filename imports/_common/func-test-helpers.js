console.log('func-tests-helpers');

export const waitAndClick = function waitAndClick(element) {
    browser.waitForExist(element);
    browser.click(element);
}

export const countDataRows = function countDataRows(divClass, wait=false) {
    if (wait) {
        browser.waitForExist(divClass);
    }
    return browser.elements(divClass).value.length;
};

export const createDoc = function createDoc(divClass, callback) {
    var countBefore = countDataRows(divClass);
    callback();
    browser.click('#SaveForm');
    var countAfter = countDataRows(divClass, true); 
    console.log('counts ' + countBefore + ' - ' + countAfter);
    chai.assert(countAfter = countBefore + 1);
    // TODO: verify also data shown is data entered
};