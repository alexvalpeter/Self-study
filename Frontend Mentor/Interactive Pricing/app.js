// Array of possible pageview packages
const pageviewValues = ["10K", "50K", "100K", "500K", "1M"];
// Array of corresponding prices for packages
const prices = [8, 12, 16, 24, 36];

const pageviewNumber = document.querySelector(".pageview-number");
const price = document.querySelector(".price");
const slider = document.querySelector(".pageview-slider");
const yearlyPriceToggle = document.querySelector(".toggle");


slider.oninput = function() {
    let index = slider.value;
    fillSlider(index);
    displayPageviews(index);
    displayPrice(index);
    
}

// Change pricing scheme when toggle selection changes
yearlyPriceToggle.onchange = function(){
    displayPrice(slider.value);
}

// Fill slider bar with color up to thumb
function fillSlider (value){
    var percentFull = ((value - slider.min)/(slider.max - slider.min) * 100);
    //console.log((percentFull) + "%");
    var percentEmpty = percentFull + .01;
    percentFull += "%";
    percentEmpty += "%";
    const sliderBackground = "linear-gradient( 90deg, hsl(174, 77%, 80%) " + percentFull + ", hsl(224, 65%, 95%) " + percentEmpty  +")";
    slider.style.background = sliderBackground;
}

// Display current price for number of pageviews
function displayPrice(index){
    // Toggle implemented as stylized checkbox
    // Apply discount if yearly pricing
    if (yearlyPriceToggle.checked){
        price.textContent = "$" + ( prices[index] - (prices[index] * .25) ) + ".00";
    } else {
        price.textContent = "$" + prices[index] + ".00";
    }
    
}

// Display current selected number of pageviews
function displayPageviews(index) {
    pageviewNumber.textContent = pageviewValues[index];
}