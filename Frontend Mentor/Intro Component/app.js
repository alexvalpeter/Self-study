/*
* Check all inputs for validity on focus out
* Add error class to invalid fields
* Remove error class from newly-valid fields
*/
document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("focusout", (event) => {
        if(!element.checkValidity()) {
            displayErrorState(element);
        } else {
            removeErrorState(element);
        }
    })

})

/*
* Listen for "invalid" event thrown by invalid submission attempt
* Override default validity error message
* Add error state to invalid field(s)
*/
document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("invalid", (event) => {
        event.preventDefault();
        displayErrorState(element);
    })
})


/*
* Add error class to specific input field
* Add custom validity error message to field  based on field name
* @param input field to be modified
*/
function displayErrorState(element) {
    element.classList.add("error");
    if (element.id != "email") {
        document.querySelector("#" + element.id + "~.error-msg").textContent = element.placeholder + " cannot be empty";
    } else {
        document.querySelector("#" + element.id + "~.error-msg").textContent = "Looks like this is not an email";
        element.placeholder = "example@host.com";
    }    
}

/*
* Remove error class to specific input field
* Reset custom validity error message
* @param input field to be modified
*/
function removeErrorState(element) {
    element.classList.remove("error");
    document.querySelector("#" + element.id + "~.error-msg").textContent = "";
}