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

// return data array with n fake objects
function fakeDataSet(config) {
    const data = [];
    let doc = {};
    let obj = {};
    for(i=0; i<config.randomCount; i++) {
        doc = Factory.create(config.collectionName, config.fakeDoc(config));
        obj = docToStrings(doc, config.formFields);
        data.push(obj);
    }
    return data;
}

// convert document to an object including only some properties (formFields)
// also values converted to properly formatted strings for HTML

function docToStrings(doc, formFields) {  
    let obj={};
    formFields.forEach( field => { 
        let value = doc[field.id];
        if (value == null) {
            value = '';
        } else {
            value = field.format ? field.format(value) : value.toString();
        }
        obj[field.id] = value;
    });
    return obj;
}

export const withCollectionList = function withCollectionList(config) {
    
    var fakeData = fakeDataSet(config);
    //fakeData[0][config.formFields[0].id] = 'DIFFERS'; // TEST-BREAK: different data
    
    return withRenderedTemplate(config.collectionName, fakeData, html => {
        //htmlData.pop(); // TEST-BREAK: missing doc
        var htmlData = config.extractDataFromHtml(html);  
        //console.log($(html)[0].outerHTML);       
        //console.log(JSON.stringify(fakeData) + '\n\n--- vs ---\n\n' + JSON.stringify(htmlData));    
        //console.log('fake data:'); console.log(fakeData);
        //console.log('html data:'); console.log(htmlData);
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
