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

export const createDoc = function createDoc(divClass, enterData) {
    var countBefore = countDataRows(divClass);
    enterData();
    browser.click('#SaveForm');
    var countAfter = countDataRows(divClass, true); // TODO refactor to avoid side effects (wait) 
    //console.log('counts ' + countBefore + ' - ' + countAfter);
    chai.assert(countAfter = countBefore + 1);
    // TODO: verify also data shown is data entered
};

export const selectDoc = function selectDoc(divClass, enterData) {
    //var count = countDataRows(divClass);
    //console.log('count ' + count);
    waitAndClick(divClass);
    browser.waitForExist('.selected');
    browser.waitForExist('.edit');
    browser.waitForExist('.remove');
    assert(true);
};


/*
extract data from some row

    var id1 = browser.elements(divClass).value[1].ELEMENT;
    var id2 = browser.elementIdElement(id1,'.w3-col').value.ELEMENT;
    var v1 = browser.elementIdText(id2).value;
    console.log(id1); console.log('\n');
    console.log(id2); console.log('\n');
    console.log(v1); console.log('\n');
    
*/