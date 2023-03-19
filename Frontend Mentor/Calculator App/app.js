const body = document.querySelector("body");
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

/*
* Listener for theme selection
*/
themeToggle.addEventListener("input", function() { 
    switchTheme(themeToggle.value);
});



document.querySelectorAll(".key").forEach( (element) => {
    element.addEventListener("click", () => {
        element.classList.add("highlighted");
        setTimeout(function() {
            element.classList.remove("highlighted");
          }, 100);
    }) 
})
/*
* Event listeners for numerical keys
* Updates display as numbers are entered
* Determines whether input is part of first or second operand
*/
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
    resetCalcState();
    resetDisplay();
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

/*
* Event listeners for operator buttons
*/
document.querySelectorAll(".operator").forEach( (element) => {
    element.addEventListener("click", () => {
        element.classList.add("selected");
        element.addEventListener("focusout", () => {
            element.classList.remove("selected");
        });

        if (displayText != 0 && operation == null){ 
            operation = element.innerHTML;

            if (firstOperand == null){
                firstOperand = displayText;
            } 

        } else if (operation != null && receivedSecondOperand == true) {
            secondOperand = displayText;
            compute();
        };
    });    
});

document.querySelector(".equals").addEventListener("click", () => {
    
    if (firstOperand !== null && operation !== null && receivedSecondOperand == true){
        secondOperand = displayText;
        compute();
    };
});


/*
* Returns calc display to default of "0"
*/
function resetDisplay (){
    displayText = "0"
    updateDisplay();
}


/*
* Resets state of calculator by clearing inputs
*/
function resetCalcState (){
    firstOperand = null;
    secondOperand = null;
    operation = null;
    receivedSecondOperand = false; 
}

/*
* Main computattion function
* Takes first and second stored operands and executes computation
* according to stored operation chosen by user
* Displays result on calc display
* Sets display to "ERROR" on divide by 0 attempt
*/
function compute (){
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operation) {
        case "+": // Addition
            displayText = firstOperand + secondOperand;
            break;
        case "-": // Subtraction
            displayText = firstOperand - secondOperand;
            break;
        case "x": // Multiplication
            displayText = firstOperand * secondOperand;
            break;
        case "/":  // Division
            if (secondOperand != 0){
                displayText = firstOperand / secondOperand; 
            } else { // Divide by 0 errror, resets calculator
                displayText = "ERROR";
                updateDisplay();
                displayText = "0";
                resetCalcState();
                return;
            }     
            break;
        default:
            return;        
    };

    updateDisplay();

    // Result becomes new first operand for further computation
    firstOperand = null;
    secondOperand = null;
    operation = null;
    receivedSecondOperand = false;
};

