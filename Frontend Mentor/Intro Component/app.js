
document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("focusout", (event) => {
        if(!element.checkValidity()) {
            element.classList.add("error");
        } else {
            element.classList.remove("error");
        }

        if(element.id == "email"){
            element.placeholder = "example@host.com";
        }
    })

})

document.querySelector("input[type=submit]").addEventListener("click", function() {

})