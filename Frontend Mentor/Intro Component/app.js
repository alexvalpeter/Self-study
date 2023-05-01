
document.querySelectorAll("input:not([type=submit])").forEach((element) => {
    element.addEventListener("focusout", (event) => {
        if(!element.checkValidity()) {
            element.classList.add("error");
            document.querySelector("#" + element.id + "~.error-msg").style.display = "block";
        } else {
            element.classList.remove("error");
            document.querySelector("#" + element.id + "~.error-msg").style.display = "none";
        }

        if(element.id == "email"){
            element.placeholder = "example@host.com";
        }
    })

})

document.querySelector("input[type=submit]").addEventListener("click", function() {

})