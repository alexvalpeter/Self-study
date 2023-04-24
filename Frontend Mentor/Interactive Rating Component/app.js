const ratingState = document.querySelector("#rating-state");
const thankyouState = document.querySelector("#thankyou-state");
let rating;


const ratingForm = document.querySelector("#rating-form");

/*
* Listen for submit event from HTML form
* Store submitted value of rating
*/
ratingForm.addEventListener("submit", event => {
    event.preventDefault();
    rating = document.querySelector('input[name="rating"]:checked').value;
    switchState();
})

/*
* Hide rating state
* Insert submitted rating number from user form
* Display "thank you" state
*/
function switchState() {
    ratingState.style.display = "none"
    document.querySelector(".selection-text span").innerHTML = rating;
    thankyouState.style.display = "flex"
}

