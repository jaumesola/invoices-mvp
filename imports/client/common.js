
export const showForm = function showForm() {
    $( cform ).show();
}

export const hideForm = function hideForm() {
    $( cform ).hide();  
}

export const templateOnRendered = function templateOnRendered() {
    cform = document.getElementById("docForm");
}
