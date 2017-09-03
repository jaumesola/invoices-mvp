
export const showForm = function showForm() {
    $( cform ).show();
}

export const hideForm = function hideForm() {
    $( cform ).hide();  
}

export const templateOnRendered = function templateOnRendered() {
    cform = document.getElementById("docForm");
}

//return currently selected document object or if none a newly created one
export const getDoc = function getDoc(config) {
    if (Session.get('selectedDocId') == null) { 
        return config.newDocument();
    } else {
        return config.findOneDocument({_id: Session.get('selectedDocId')});
    }
}