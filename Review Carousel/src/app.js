// Review data, local
const reviews = [
    {
        avatar: "img/suitwoman.jpg",
        name: "Susan Smith",
        occupation: "Dermatologist",
        reviewText: "This is the real deal if you are looking for a quality medical grade product. \
            This stuff is real safe and effective. It only takes me 10 minutes a day to carry out the treatments. \
            I would recommend this 100x."  
    },

    {
        avatar: "img/teeshirtwoman.jpg",
        name: "Jamie Thompkins",
        occupation: "Cosmetic Surgeon",
        reviewText: "I've been observing a lot of positive changes as soon as I started using this product. \
            It has benefited me more than I ever thought it would. If you're a beginner like me, I would really recommend this one. \
            It only takes me 10 minutes a day to carry out the treatments." 
    },

    {
        avatar: "img/natureman.jpg",
        name: "Daniel Berg",
        occupation: "Aesthetician",
        reviewText: "This is the kind you want to get. It is easy to use. \
            I am already noticing results and have recommended it to my entire family. They love it too."
    },

    {
        avatar: "img/woodwallwoman.jpg",
        name: "Jessica Lee",
        occupation: "Nurse",
        reviewText: "I have been using this product for over 2 years and I have seen miraculous results. \
            If you're considering trying this out, don't hesitate! You will thank yourself later for the investment!" 
    },

    {
        avatar: "img/vestman.jpg",
        name: "Joseph Rodriguez",
        occupation: "Cosmetic Chemist",
        reviewText: "This is one of the most innovative products on the market today. \
            As a formulator, I see a lot of ineffective and overpriced products on the market today. \
            This is not one of them. This is the real deal and I have seen the results firsthand."
        
    }

];


// Create reference to review data
// Review text and image
const avatar = document.querySelector(".avatar");
const reviewerName = document.querySelector(".reviewer-name");
const reviewerOccupation = document.querySelector(".reviewer-occupation");
const reviewText = document.querySelector(".review-text");
// Previous, next, and random button
const buttonPrevious = document.querySelector(".previous");
const buttonNext = document.querySelector(".next");
const buttonSurprise = document.querySelector(".surprise");

// Current index of review in reviews array
// Default at 0 on page load
var index = 0;
var numOfReviews = reviews.length;

// Regreses through carousel and loops 
buttonPrevious.addEventListener("click", function(){
    if(index == 0){
        index = numOfReviews-1;
    } else {
        index--;    
    }
    changeReview(index);
});


// Advances through carousel and loops
buttonNext.addEventListener("click", function(){
    if(index == numOfReviews-1){
        index = 0;
    } else {
        index++;
    }
    changeReview(index);
})

buttonSurprise.addEventListener("click", function(){
    var newIndex = Math.floor( Math.random() * numOfReviews );
    while (index == newIndex){
        newIndex = Math.floor( Math.random() * numOfReviews );
    }
    index = newIndex;
    
    changeReview(index);
})

// Replace all review data with data from previous entry
function changeReview(index){
    avatar.src = reviews[index].avatar;
    reviewerName.textContent = reviews[index].name;
    reviewerOccupation.textContent = reviews[index].occupation;
    reviewText.textContent = reviews[index].reviewText; 
}

