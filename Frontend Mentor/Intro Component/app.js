/*
* Check all inputs for validity on focus out
* 
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

document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("invalid", (event) => {
        event.preventDefault();
        displayErrorState(element);
    })
})



function displayErrorState(element) {
    element.classList.add("error");
    if (element.id != "email") {
        document.querySelector("#" + element.id + "~.error-msg").textContent = element.placeholder + " cannot be empty";
    } else {
        document.querySelector("#" + element.id + "~.error-msg").textContent = "Looks like this is not an email";
        element.placeholder = "example@host.com";
    }    
}

function removeErrorState(element) {
    element.classList.remove("error");
    document.querySelector("#" + element.id + "~.error-msg").textContent = "";
}