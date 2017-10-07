Meteor.startup(function() {
    console.log('Meteor.startup()');
    Migrations.migrateTo('latest');
    //Migrations.unlock(); Migrations.migrateTo(0); // DOWN TEST
});

// TODO: later: see how to avoid loading all migrations every time the server starts

Migrations.add({
    version: 1,
    name: 'Add statuses.',
    up: function() {
        //code to migrate up to version 1}
        var statuses = new Mongo.Collection('statuses');
        statuses.insert({code:'NOT_NOW', description: 'Do not show an offer to the creditor at the moment'});        
        statuses.insert({code:'OFFER_OK', description: 'Offer approved to show to creditor'});
        statuses.insert({code:'CLEAR_RISK', description: 'Should perform risk assesment (creditor requested advance)'});        
        statuses.insert({code:'ASK_CRED_DATA', description: 'Should ask creditor data (risk cleared)'});
        statuses.insert({code:'WAIT_CRED_DATA', description: 'Waiting for creditor data'});
        statuses.insert({code:'ASK_CRED_SIGN', description: 'Should ask creditor signature (creditor data received)'});
        statuses.insert({code:'WAIT_CRED_SIGN', description: 'Waiting for creditor signature'});
        statuses.insert({code:'ASK_DEBT_SIGN', description: 'Should ask debtor signature (creditor signature received)'});
        statuses.insert({code:'WAIT_DEBT_SIGN', description: 'Waiting for debtor signature' });
        statuses.insert({code:'SEND_FUNDS_CRED', description: 'Should send funds to creditor (debtor signature received)'});
        statuses.insert({code:'WAIT_FUNDS_DEBT', description: 'Waiting for debtor to send funds upon maturity'});
        statuses.insert({code:'COMPLETED', description: 'Funds received from debtor on time'});
        statuses.insert({code:'UNPAID', description: 'Debtor did not send funds on time'});
        statuses.insert({code:'LATE_PAID', description: 'Funds received from debtor later than agreed'});
    },
    down: function() {
        //code to migrate down to version 0}
        var statuses = new Mongo.Collection('statuses');
        statuses.remove({});
    }
});

Migrations.add({
    version: 2,
    name: 'Add settings.',
    up: function() {
        //code to migrate up to version 1}
        var settings = new Mongo.Collection('settings');
        settings.insert({
            _id: 'development',
            field1: 'value1',
            field2: 'value2',
            field3: 'value3',
        });        
    },
    down: function() {
        //code to migrate down to version 0}
        var settings = new Mongo.Collection('settings');
        settings.remove({_id: 'development'});
    }
});

Migrations.add({ version: 3, name: 'dummy', up: function() {}, down: function() {}, });