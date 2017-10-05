Template.genericRow.helpers({
    
    'field': function (ff) {
        //console.log('field helper:'); console.log(ff); console.log(this.doc);
        let value = this.doc[ff.id];
        if (value != null) {
            if (ff.format) {
                value = ff.format(value);
            }
        }
        return value;
    },
    
    'selected': function () {
        if( this.doc._id == Session.get('selectedDocId') ){
            return "selected";
        }
    },
});