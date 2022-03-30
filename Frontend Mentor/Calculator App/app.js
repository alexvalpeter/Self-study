const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeToggle = document.querySelector("#theme-toggle");
const display = document.querySelector("#display-box");
let displayText = "";
let operation = null;
let firstOperand = null;
let secondOperand = null;
let receivedSecondOperand = false;

/**
 * Changes visual theme and color scheme of page according to user input
 *
 * @param {number} theme Number corresponding to user-chosen theme
 */
function switchTheme(themeNumber){
    body.className = "theme-" + themeNumber;
};

themeToggle.addEventListener("input", function() { 
    switchTheme(themeToggle.value);
});

document.querySelectorAll(".num").forEach( (element) => {
    element.addEventListener("click", () => {
        if (displayText == "0"){
            displayText = element.innerHTML;
        } else if (firstOperand !== null && receivedSecondOperand == false){
            displayText = element.innerHTML;
            receivedSecondOperand = true;
        } else {
            appendDigit(element.innerHTML);
        };

        updateDisplay();
    });
}); 

document.querySelector(".reset").addEventListener("click", () => {
    clear();
});

document.querySelector(".del").addEventListener("click", () => {
    delDigit();
});

function appendDigit(newDigit){
    displayText += newDigit;
};

function updateDisplay(){
   // displayText = displayText.concat(newData);
    display.innerHTML = displayText;
};

function delDigit (){
    if (displayText.length == 1){
        displayText = "0";
    } else {
        displayText = displayText.substring(0, displayText.length-1);
    };

    updateDisplay();
};

document.querySelectorAll(".operator").forEach( (element) => {
    element.addEventListener("click", () => {
        if (operation == null){ 
            operation = element.innerHTML;

            if (firstOperand == null){
                firstOperand = displayText;
            } else if (receivedSecondOperand == true) {
                secondOperand = displayText;
                compute();
            }

        };
        
        
    });    
});

document.querySelector(".equals").addEventListener("click", () => {
    
    if (firstOperand !== null && operation !== null && receivedSecondOperand == true){
        console.log("yee");
        secondOperand = displayText;
        console.log(firstOperand + "  " + operation + "  " + secondOperand);
        compute();
    };
});


function clear () {
    displayText = "0"
    updateDisplay();
};

function compute (){
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operation) {
        case "+":
            displayText = firstOperand + secondOperand;
            break;
        case "-":
            displayText = firstOperand - secondOperand;
            break;
        case "x":
            displayText = firstOperand * secondOperand;
            break;
        case "/":  
            if (secondOperand != 0){
                displayText = firstOperand / secondOperand; 
            } else {
                displayText = "ERROR"
                updateDisplay();
                firstOperand = null;
                secondOperand = null;
                operation = null;
                receivedSecondOperand = false;
                return;
            }     
            break;
        default:
            return;        
    };

    updateDisplay();

    firstOperand = displayText;
    secondOperand = null;
    operation = null;
    receivedSecondOperand = false;
};

