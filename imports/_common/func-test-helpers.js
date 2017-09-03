console.log('func-tests-helpers');

export const waitAndClick = function waitAndClick(element) {
    browser.waitForExist(element);
    browser.click(element);
}