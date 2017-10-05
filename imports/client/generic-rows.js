Template.genericRow.helpers({
    
    'field': function (ff) {
        //console.log('field helper:'); console.log(ff);
        let value = this.doc[ff.id];
        return ff.format ? ff.format(value) : value;
    },
    
    'selected': function () {
        if( this.doc._id == Session.get('selectedDocId') ){
            return "selected";
        }
    },
});