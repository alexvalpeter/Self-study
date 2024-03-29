const body = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");
const display = document.querySelector("#display-box");
const userTheme = localStorage.getItem("theme");

let displayText = "";
let operation = null;
let firstOperand = null;
let secondOperand = null;
let receivedSecondOperand = false;


// Set theme according to user preference if saved in local storage
// Set toggle to corresponding position
if (userTheme) {
 themeToggle.value = userTheme;
 switchTheme(userTheme);
} 

//localStorage.clear();

/**
 * Changes visual theme and color scheme of page according to user input
 * Stores theme preference in local storage
 * 
 * @param {number} theme Number corresponding to user-chosen theme
 */
function switchTheme(themeNumber){
    body.className = "theme-" + themeNumber;
    localStorage.setItem("theme", themeNumber);
};

/*
* Listener for theme selection
*/
themeToggle.addEventListener("input", function() { 
    switchTheme(themeToggle.value);
});


/*
* Hightlights clicked key for 100ms
*/
document.querySelectorAll(".key").forEach( (element) => {
    element.addEventListener("click", () => {
        element.classList.add("highlighted");
        setTimeout(function() {
            element.classList.remove("highlighted");
          }, 100);
    }) 
})


/*
* Click event listeners for numerical keys
* Updates display as numbers are entered
* Determines whether input is part of first or second operand
*/
document.querySelectorAll(".num").forEach( (element) => {
    element.addEventListener("click", () => {
        if (displayText === "0" && displayText){
            displayText = element.innerHTML;
        } else if (firstOperand !== null && receivedSecondOperand == false) {
            displayText = element.innerHTML;
            receivedSecondOperand = true;
        } else {
            appendDigit(element.innerHTML);
        };

        updateDisplay();
    });
}); 


/*
* Click event listener for decimal key
* Updates display based on current display and current operands
* Does not allow for multiple decimals to be added to display/operand
*/
document.querySelector(".decimal").addEventListener("click", () => {
    if (displayText[displayText.length-1] != ".") {
        if (firstOperand !== null && receivedSecondOperand == false){
            displayText = "0.";
            receivedSecondOperand = true;
        } else {
            appendDigit(".");
        };

        updateDisplay();
    }    
});


/*
* Resets calculator state and zero out display
*/
document.querySelector(".reset").addEventListener("click", () => {
    resetCalcState();
    resetDisplay();
});

document.querySelector(".del").addEventListener("click", () => {
    delDigit();
});


/*
* Adds new digit to end of current display string 
*/
function appendDigit(newDigit){
    displayText += newDigit;
};

function updateDisplay(){
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
    firstOperand = displayText;
    secondOperand = null;
    operation = null;
    receivedSecondOperand = false;
};

