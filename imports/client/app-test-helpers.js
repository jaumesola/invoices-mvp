import { chai } from 'meteor/practicalmeteor:chai';

export const logResult = function logResult(err, okMessage) {
    if (err) console.log('ERROR ' + err);
    else console.log( 'OK ' + okMessage);
}

export const h2Text = function h2Text(text) {
    console.log("--- H2 text: " + text);
    // console.log( '$$$' + $('body').html() + '$$$');
    chai.assert.equal($('h2').html(), text);
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
