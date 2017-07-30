FlowRouter.route('/compy', {
    action() {
        BlazeLayout.render('companiesBody', { });
    }
});

FlowRouter.route('/invy', {
    action() {
        BlazeLayout.render('invoicesBody', { });
    }
});