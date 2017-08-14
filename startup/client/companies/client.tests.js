import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { withRenderedTemplate } from '/imports/client/test-helpers.js';
import './templates.html';

describe('Companies', function () {

/*	
  beforeEach(function () {
    Template.registerHelper('_', key => key);
  });

  afterEach(function () {
    Template.deregisterHelper('_');
  });

*/
	  it('is true', function () { chai.assert.isTrue(true); });
	  //it('is true - wrong', function () { chai.assert.isTrue(false); });
	  
	  it('renders H2 title', function () {
		  //const doc = Factory.build('doc');
		  withRenderedTemplate('companies', {}, (el) => {
			  chai.assert.equal($(el).find('h2').text(), "Companies List");
		  });
	  });

/*
  it('renders correctly with simple data', function () {
    const todo = Factory.build('todo', { checked: false });
    const data = {
      todo: Todos._transform(todo),
      onEditingChange: () => 0,
    };

    withRenderedTemplate('Todos_item', data, (el) => {
      chai.assert.equal($(el).find('input[type=text]').val(), todo.text);
      chai.assert.equal($(el).find('.list-item.checked').length, 0);
      chai.assert.equal($(el).find('.list-item.editing').length, 0);
    });
  });

  it('renders correctly when checked', function () {
    const todo = Factory.build('todo', { checked: true });
    const data = {
      todo: Todos._transform(todo),
      onEditingChange: () => 0,
    };

    withRenderedTemplate('Todos_item', data, (el) => {
      chai.assert.equal($(el).find('input[type=text]').val(), todo.text);
      chai.assert.equal($(el).find('.list-item.checked').length, 1);
    });
  });

  it('renders correctly when editing', function () {
    const todo = Factory.build('todo');
    const data = {
      todo: Todos._transform(todo),
      editing: true,
      onEditingChange: () => 0,
    };

    withRenderedTemplate('Todos_item', data, (el) => {
      chai.assert.equal($(el).find('input[type=text]').val(), todo.text);
      chai.assert.equal($(el).find('.list-item.editing').length, 1);
    });
  });
  */
});
