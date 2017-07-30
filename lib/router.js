FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {});
  },
});

FlowRouter.route('/invy', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { content_container: 'invoicesBody' });
  },
});

FlowRouter.route('/compy', {
    action() {
        BlazeLayout.render('App_body', { content_container: 'companiesBody' });
    }
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { content_container: 'App_notFound' });
	},
};
