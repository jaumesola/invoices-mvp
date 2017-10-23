import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', {});
    },
});

FlowRouter.route('/settings', {
    name: 'settings_url',
    waitOn() {
        return import('/imports/settings/client/settings-client.js');
    },
    action() {
        BlazeLayout.render('App_body', { content_container: 'settingsBody' });
    }
});

FlowRouter.route('/companies', {
    name: 'companies_url',
    waitOn() {
        return import('/imports/companies/client/companies-client.js');
    },
    action() {
        BlazeLayout.render('App_body', { content_container: 'companiesBody' });
    }

});

FlowRouter.route('/offers', {
    name: 'App.home',
    waitOn() {
        return import('/imports/offers/client/offers-client.js');
    },
    action() {
        BlazeLayout.render('App_body', { content_container: 'offersBody' });
    },
});

FlowRouter.route('/advances', {
    name: 'App.home',
    waitOn() {
        return import('/imports/advances/client/advances-client.js');
    },
    action() {
        BlazeLayout.render('App_body', { content_container: 'advancesBody' });
    },
});

FlowRouter.route('*', {
    name: 'Not Found',
    action() {
        BlazeLayout.render('App_body', { content_container: 'App_notFound' });
    },
});