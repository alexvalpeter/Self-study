const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeToggle = document.querySelector("#theme-toggle");

/**
 * Changes visual theme and color scheme of page according to user input
 *
 * @param {number} theme Number corresponding to user-chosen theme
 */
function switchTheme(theme){
    body.className = "theme-" + theme;

}

themeToggle.addEventListener("input", function(){ 
    switchTheme(themeToggle.value);
});