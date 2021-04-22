
// Add event listeners to each button
const btns = document.querySelectorAll(".btn");

// Add click event listener to all buttons on page
btns.forEach( function(btn) {
    btn.addEventListener("click", function(e) {
        // Select question whose button was clicked
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("expanded");
    })
})

