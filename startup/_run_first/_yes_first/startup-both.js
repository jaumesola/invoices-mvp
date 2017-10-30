console.log('STARTUP WITH ' + Meteor.settings.public.environment + ' SETTINGS');

globalFormatDate = function (d) {
    
    if ( typeof d == 'string' ) {
        // TODO quick hack, for come reason date fields come from mongo as strings with enclosing quotes, this removes them
        d = d.replace(/^"(.+(?="$))"$/, '$1');
        return d.split('T')[0];
    }
    
    if ( typeof d == 'object' ) {
        return d.toISOString().split('T')[0];
    } 
    
    return d;
}