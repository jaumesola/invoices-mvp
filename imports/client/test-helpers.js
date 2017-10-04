import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Tracker } from 'meteor/tracker';
import { chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';

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

// return data array with n fake documents
function fakeDataSet(config) {
    const data = [];
    for(i=0; i<config.randomCount; i++) {
        data.push( Factory.create(config.collectionName, config.fakeData(config)) );
    }
    return data;
}

// reduce array of objects to only the document object properties included in HTML
// also values converted to string as HTML is all text
function reduceArray(a, formFields) {
    return a.map( x => {
        var y ={};
        formFields.forEach( field => { y[field.id] = x[field.id].toString() } );
        return y;
    });
}

export const withCollectionList = function withCollectionList(config) {
    
    var fakeData = fakeDataSet(config);
    //fakeData[0][p.propsInHtml[0]] = 'DIFFERS'; // TEST-BREAK: different data
    
    return withRenderedTemplate(config.collectionName, fakeData, html => {
        //alert($(html)[0].outerHTML);
        var htmlData = config.extractDataFromHtml(html);
        fakeData = reduceArray(fakeData, config.formFields);
        //htmlData.pop(); // TEST-BREAK: missing doc
        //alert(JSON.stringify(fakeData) + '\n\n--- vs ---\n\n' + JSON.stringify(htmlData));    
        console.log(fakeData); console.log(htmlData);        
        chai.assert.deepEqual(fakeData, htmlData);
    });
}

export const sayRendersSomeDocs = function sayRendersSomeDocs(config) {
    config.randomCount = _.random(1,9);
    return 'renders ' + config.randomCount + ' ' + config.collectionName;
}

export const sayHasH2Text = function sayHasH2Text(config) {
    return 'has an H2 with specific text';
}

export const checksH2Text = function checksH2Text(config) {      
    withRenderedTemplate(config.template, {}, (el) => {
        var text = config.collectionName;
        //text = text.charAt(0).toUpperCase() + text.slice(1) + ' Management';
        chai.assert.equal($(el).find('h2').text(), text);
    });
}

export const factoryDefine = function factoryDefine(config, data) {
    Factory.define(config.collectionName, config.collection, data);
}
