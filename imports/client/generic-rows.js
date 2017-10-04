Template.genericRow.helpers({
    'field': function (id) {
        return this.doc[id];
    },
    'selected': function () {
        if( this.doc._id == Session.get('selectedDocId') ){
            return "selected";
        }
    },
});