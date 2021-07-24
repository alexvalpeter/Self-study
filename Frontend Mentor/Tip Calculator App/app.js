// Inputs
const billTotalInput = document.querySelector("#bill-total");
const tipPercentageBtns = document.querySelectorAll(".tip-percentage");
const customTipInput = document.querySelector("#custom-tip");
const numPeopleInput = document.querySelector("#num-people");

// Calculation values
var billTotal = 0;
var tipPercentage = 0;
var tip = 0;
var numPeople = 0;

// Results
const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");


// Event Listeners
billTotalInput.addEventListener("change", function(){
    billTotal = billTotalInput.value;
    if (billTotal != 0 && tipPercentage != 0 && numPeople != 0) {
        updateTotals();
    } 
});

tipPercentageBtns.forEach(function(element){
    element.addEventListener("click", function(){
        // Deselect any other button
        tipPercentageBtns.forEach(e => {
            if (e !== element) {
                e.classList.remove("selected");
            };
        });        
        // Add or remove clicked button's style
        element.classList.toggle("selected");

        // Parse and assign tip percentage
        if (element.classList.contains("selected")){
            tipPercentage = parsePercentage(element)/100;
        } else {
            tipPercentage = 0;
        }

        if (billTotal != 0 && tipPercentage != 0 && numPeople != 0) {
            updateTotals();
        }    
    })
    
});

customTipInput.addEventListener("change", function(){
    // Convert percentage value into decimal value
    tipPercentage = customTipInput.value/100;
    if (billTotal != 0 && tipPercentage != 0 && numPeople != 0) {
        updateTotals();
    } 
});

numPeopleInput.addEventListener("change", function(){
    numPeople = numPeopleInput.value;
    if (billTotal != 0 && tipPercentage != 0 && numPeople != 0) {
        updateTotals();
    } 
});

function parsePercentage(percentString){
    // Remove % sign at end
    var percentage = Number(percentString.innerHTML.slice(0, -1));
    return percentage;
};


function calculateTip () {
    tip = billTotal * tipPercentage;
}

function calculateTotal () {

}

function updateTotals () {
    calculateTip();
    var splitTip = tip / numPeople;
    console.log(tip + " " + numPeople);
    tipPerPerson.innerHTML = splitTip.toFixed(2);
    var splitBill = billTotal / numPeople;
    totalPerPerson.innerHTML = (splitTip + splitBill).toFixed(2);
}



