// Inputs
const billTotalInput = document.querySelector("#bill-total");
const tipPercentageBtns = document.querySelectorAll(".tip-percentage");
const customTipInput = document.querySelector("#custom-tip");
const numPeopleInput = document.querySelector("#num-people");

// Calculation values
var billTotal;
var tipPercentage;
var numPeople;

// Results
const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");

// tipPercentageBtns.forEach(parsePercentage);

// Event Listeners
billTotalInput.addEventListener("change", function(){
    billTotal = billTotalInput.value;
});

customTipInput.addEventListener("change", function(){
    tipPercentage = customTipInput.value/100;
    console.log(tipPercentage);
});

numPeopleInput.addEventListener("change", function(){
    numPeople = numPeopleInput.value;
});

function parsePercentage(percentString){
    var percentage = Number(percentString.innerHTML.slice(0, -1));
    return percentage;
};
