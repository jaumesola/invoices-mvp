import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Tracker } from 'meteor/tracker';
import { chai } from 'meteor/practicalmeteor:chai';

const withDiv = function withDiv(callback) {
  const el = document.createElement('div');
  document.body.appendChild(el);
  try {
    callback(el);
  } finally {
    document.body.removeChild(el);
  }
};

export const withRenderedTemplate = function withRenderedTemplate(template, data, callback) {
  withDiv( html => {
    const ourTemplate = _.isString(template) ? Template[template] : template;
    Blaze.renderWithData(ourTemplate, data, html);
    Tracker.flush();
    callback(html);
  });
};

// return data array with n fabricated documents
function dataArray(n, fabricateDocument) {
    const data = [];
    for(i=0; i<n; i++) {
        data.push(fabricateDocument());
    }
    return data;
}

// reduce array of objects to only the document object properties included in HTML
// also values converted to string as HTML is all text
function reduceArray(a, propsInHtml) {
    return a.map( x => {
        var y ={};
        propsInHtml.forEach( prop => { y[prop] = x[prop].toString() } );
        return y;
    });
}

export const withCollectionList = function withCollectionList(p) {

    var fabricatedData = dataArray(p.count, p.fabricateDocument);
    //fabricatedData[0][p.propsInHtml[0]] = 'DIFFERS'; // TEST-BREAK: different data
    
    return withRenderedTemplate(p.collectionName, fabricatedData, html => {
        //alert($(html)[0].outerHTML);
        var htmlData = p.extractDataFromHtml(html);
        fabricatedData = reduceArray(fabricatedData, p.propsInHtml);
        //htmlData.pop(); // TEST-BREAK: missing doc
        //alert(JSON.stringify(fabricatedData) + '\n\n--- vs ---\n\n' + JSON.stringify(htmlData));        
        chai.assert.deepEqual(fabricatedData, htmlData);
    });
};