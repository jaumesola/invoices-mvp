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

function fillBrowserForm(config) {
    var fakeData = config.fakeData(config);
    for (var i = 0; i < config.formFields.length; i++) {
        var field = config.formFields[i];
        //console.log('field: ' + field + ' >>fake>> ' + fakeData[field]);
        browser.setValue('#'+field, fakeData[field]);
    }
}

export function saySelect(config) {
    return 'Select ' + config.modelName;
}

export const selectDoc = function selectDoc() {
    waitAndClickLast('.datarow');
    browser.waitForExist('.selected');
    browser.waitForExist('.edit');
    browser.waitForExist('.remove');
    assert(true);
};

export function sayAdd(config) {
    return 'Add ' + config.modelName;
}

export const createDoc = function createDoc(config) {
    var countBefore = countDataRows();
    fillBrowserForm(config);
    browser.click('#SaveForm');
    var countAfter = waitCountDataRows();
    //console.log('counts ' + countBefore + ' - ' + countAfter);
    chai.assert(countAfter = countBefore + 1);
    // TODO: verify also data shown is data entered
};


export function sayEdit(config) {
    return 'Edit ' + config.modelName;
}

export const editDoc = function editDoc(config) {
    waitAndClickFirst('.edit'); // requires doc to be already selected
    fillBrowserForm(config);
    browser.click('#SaveForm');
    assert(true);
}

export function sayRemove(config) {
    return 'Remove ' + config.modelName;
}

export const removeDoc = function removeDoc() {
    //assert(true); return;
    var countBefore = countDataRows();
    waitAndClickFirst('.datarow');
    waitAndClickFirst('.remove');
    var countAfter = waitCountDataRows();
    chai.assert(countAfter = countBefore - 1);
}

export function sayClickCreate() {
    return 'click on create button';
}

export function clickCreate(config)  {
    waitAndClickFirst('.create');        
    for (var i = 0; i < config.formFields.length; i++) {
        var field = config.formFields[i];
        chai.assert.equal(browser.getTagName('#'+field), 'input');
    }
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