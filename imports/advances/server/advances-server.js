import '../advances.js';

Meteor.publish(AdvancesConfig.subscription, function () {
    return AdvancesConfig.collection.find();
});