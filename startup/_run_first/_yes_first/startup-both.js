console.log('STARTUP WITH ' + Meteor.settings.public.environment + ' SETTINGS');

globalFormatDate = function (d) {
        if ( typeof d == 'object' ) {
            return d.toISOString().split('T')[0];
        } else {
            return d;
        }
}