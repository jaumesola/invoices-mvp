import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', {});
    },
});

FlowRouter.route('/invy', {
    name: 'App.home',
    waitOn() {
        return import('/imports/invoices/client/invoices-client.js');
    },
    action() {
        BlazeLayout.render('App_body', { content_container: 'invoicesBody' });
    },
});

FlowRouter.route('/compy', {
    waitOn() {
        return import('/imports/companies/client/companies-client.js');
 	},
    action() {
 	    BlazeLayout.render('App_body', { content_container: 'companiesBody' });
    }

});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { content_container: 'App_notFound' });
    },
};
