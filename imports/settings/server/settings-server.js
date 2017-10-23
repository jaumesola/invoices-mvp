import '../settings-meteor.js';

Meteor.publish(SettingsConfig.subscription, function () {
    return SettingsConfig.collection.find();
});