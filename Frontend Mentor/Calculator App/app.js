const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeToggle = document.querySelector("#theme-toggle");
const display = document.querySelector("#display-box");
let displayText = "";

/**
 * Changes visual theme and color scheme of page according to user input
 *
 * @param {number} theme Number corresponding to user-chosen theme
 */
function switchTheme(themeNumber){
    body.className = "theme-" + themeNumber;
};

themeToggle.addEventListener("input", function(){ 
    switchTheme(themeToggle.value);
});

document.querySelectorAll(".num").forEach( (element) => {
    element.addEventListener("click", () => {
        if (displayText == "0"){
            displayText = element.innerHTML;
        } else {
            appendDigit(element.innerHTML);
        };

        updateDisplay();
    });
}); 

document.querySelector(".reset").addEventListener("click", () => {
    clearDisplay();
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

function clearDisplay () {
    displayText = "0"
    display.innerHTML = displayText;
};

