console.log('func-tests-helpers');

export const waitAndClick = function waitAndClick(element) {
    browser.waitForExist(element);
    browser.click(element);
}

export const countDataRows = function countDataRows() {
    return browser.elements('.datarow').value.length;
};

export const waitCountDataRows = function waitCountDataRows() {
    browser.waitForExist('.datarow');
    return countDataRows();
};

export const createDoc = function createDoc(enterData) {
    var countBefore = countDataRows();
    enterData();
    browser.click('#SaveForm');
    var countAfter = waitCountDataRows();
    //console.log('counts ' + countBefore + ' - ' + countAfter);
    chai.assert(countAfter = countBefore + 1);
    // TODO: verify also data shown is data entered
};

export const selectDoc = function selectDoc() {
    waitAndClick('.datarow');
    browser.waitForExist('.selected');
    browser.waitForExist('.edit');
    browser.waitForExist('.remove');
    assert(true);
};

export const removeDoc = function removeDoc() {
    var countBefore = countDataRows();
    browser.click('.remove'); // requires doc to be already selected
    var countAfter = waitCountDataRows();
    chai.assert(countAfter = countBefore - 1);
}

/*
extract data from some row

    var id1 = browser.elements(divClass).value[1].ELEMENT;
    var id2 = browser.elementIdElement(id1,'.w3-col').value.ELEMENT;
    var v1 = browser.elementIdText(id2).value;
    console.log(id1); console.log('\n');
    console.log(id2); console.log('\n');
    console.log(v1); console.log('\n');
    
*/