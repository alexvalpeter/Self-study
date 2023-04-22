const ratingState = document.querySelector("#rating-state");
const thankyouState = document.querySelector("#thankyou-state");
let rating;


const ratingForm = document.querySelector("#rating-form");

ratingForm.addEventListener("submit", event => {
    event.preventDefault();
    rating = document.querySelector('input[name="rating"]:checked').value;
    switchState();
})

function switchState() {
    ratingState.style.display = "none"
    document.querySelector(".selection-text span").innerHTML = rating;
    thankyouState.style.display = "flex"
}

