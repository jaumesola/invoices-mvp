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

Migrations.add({ version: 3, name: 'dummy', up: function() {}, down: function() {}, });