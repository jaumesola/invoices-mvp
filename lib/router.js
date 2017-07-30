FlowRouter.route('/invy', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'invoicesBody' });
  },
});

FlowRouter.route('/compy', {
    action() {
        BlazeLayout.render('App_body', { main: 'companiesBody' });
    }
});
