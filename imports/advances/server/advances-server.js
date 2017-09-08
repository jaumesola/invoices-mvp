import '../advances-meteor.js';

Meteor.publish(AdvancesConfig.subscription, function () {
    return AdvancesConfig.collection.find();
});