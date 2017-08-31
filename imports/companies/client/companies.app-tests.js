import { chai } from 'meteor/practicalmeteor:chai';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { $ } from 'meteor/jquery';
//import { Tracker } from 'meteor/tracker';
//import { Promise } from 'meteor/promise';
//import { denodeify } from '/imports/_common/denodeify';

console.log('companies.app-tests');

/*
//Tracker.afterFlush runs code when all consequent of a tracker based change
//(such as a route change) have occured. This makes it a promise.
const afterFlushPromise = denodeify(Tracker.afterFlush);

afterFlushPromise().then(() => {
	var html = $('body').html();
	console.log( 'html: ' + html);
	//assert.equal($('.title-wrapper').html(), list.name);
});
*/

describe('Companies', function () {

    before(function(done) {
        console.log("Companies -- before");
        FlowRouter.go('/companies');
        setTimeout(done, 300);
    });
   
    it('/companies shows Companies in H2 ', function () {
        console.log("Companies -- H2");
        //console.log( '$$$' + $('h2').html() + '$$$');
        chai.assert.equal($('h2').html(), "Companies List");
    });
    
});