
document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("focusout", (event) => {
        if(!element.checkValidity()) {
            element.classList.add("error");
        } else {
            element.classList.remove("error");
        }
    })

})