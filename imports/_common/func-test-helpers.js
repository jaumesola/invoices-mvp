console.log('func-tests-helpers');

export const waitAndClickFirst = function waitAndClickFirst(element) {
    browser.waitForExist(element);
    browser.click(element)
}

export const waitAndClickLast = function waitAndClickLast(element) {
    browser.waitForExist(element);
    var els = browser.elements(element);
    var i = els.value.length - 1;
    browser.elementIdClick(els.value[i].ELEMENT);
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
    waitAndClickLast('.datarow');
    browser.waitForExist('.selected');
    browser.waitForExist('.edit');
    browser.waitForExist('.remove');
    assert(true);
};

export const editDoc = function editDoc(enterData) {
    waitAndClickFirst('.edit'); // requires doc to be already selected
    enterData();
    browser.click('#SaveForm');
    assert(true);
}

export const removeDoc = function removeDoc() {
    //assert(true); return;
    var countBefore = countDataRows();
    waitAndClickFirst('.datarow');
    waitAndClickFirst('.remove');
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