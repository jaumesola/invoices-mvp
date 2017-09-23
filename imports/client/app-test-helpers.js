import { chai } from 'meteor/practicalmeteor:chai';

export const logResult = function logResult(err, okMessage) {
    if (err) console.log('ERROR ' + err);
    else console.log( 'OK ' + okMessage);
}

export const url = function (config) {
    return '/' + config.collectionName;
}

export const sayShowsCorrectH2 = function (config) {
    return 'shows correct H2: ' +  config.collectionName;
}

export const h2Text = function h2Text(config) {
    var text = config.collectionName;
    console.log("--- H2 text: " + text);
    //console.log( '$$$' + $('body').html() + '$$$');
    chai.assert.equal($('h2').html(), text);
}

export const sayShowsCreateButton = function () {
    return 'shows create button';
}

export const createButton = function () {
    console.log("--- create button");
    chai.assert.equal($('.create').html(), "Create");
}

export const showsFormOnCreateClick = function () {
    // TODO: click the create button
    console.log("--- shows form on create button click");
    chai.assert.equal($('.create').html(), "Create");
}
