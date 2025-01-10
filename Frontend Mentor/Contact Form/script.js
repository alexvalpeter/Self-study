//var errorMsgs = document.querySelectorAll(".error-msg");
//console.log(errorMsgs);

document.querySelectorAll(".field-area").forEach((element) => {
    element.addEventListener("focusout", (event) => {
        if(!element.checkValidity()) {
            //document.element.style.setProperty("display", "block");
            for (let i = 0; element.parentNode; i++){
                console.log(element.parentNode);
                element = element.parentNode;
               // console.log(element.classList);
               console.log(element.nodeName);
                if (element.classList.contains("input-label-group")) {
                    //console.log(element);
                    element = element.parentNode.parentNode;
                    console.log(element);
                    break;
                } else if (element.classList.contains("field")){
                    break;
                }

            }
            //console.log(element);
           // var field = element.parentNode;
            var errmsg = element.querySelector(".error-msg")
            errmsg.style.display = "block";
            //console.log(errmsg);
        }
    })
})

