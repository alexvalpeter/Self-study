/* Dark mode toggle */
const toggle = document.querySelector(".color-mode-toggle");

/* All elements on page that change on dark mode toggle */
const body = document.querySelector("body");
const headingOne = document.querySelector("h1");
const headingTwo = document.querySelector("h2");
const stat = document.querySelectorAll(".stat");
const totalFollowersCount = document.querySelector(".total-followers-count");
const toggleLabel = document.querySelector(".toggle-label");
const socialUsername = document.querySelectorAll(".social-username");
const statLabel = document.querySelectorAll(".stat-label");
const attribution = document.querySelector(".attribution");
const card = document.querySelectorAll(".card");

toggle.onchange = function() {
    toggleDarkMode();
}

function toggleDarkMode() {
    darkModeBackground();
    darkModeWhiteText();
    darkModeCardBackground();
    darkModeGreyText();
}

function darkModeBackground() {
    body.classList.toggle("dark");
}

function darkModeWhiteText() {
    headingOne.classList.toggle("dark");
    headingTwo.classList.toggle("dark");

    stat.forEach(element => element.classList.toggle("dark"));
}

function darkModeCardBackground() {
    card.forEach(element => element.classList.toggle("dark"));
}

function darkModeGreyText() {
    totalFollowersCount.classList.toggle("dark");
    toggleLabel.classList.toggle("dark");

    socialUsername.forEach(element => element.classList.toggle("dark"));
    statLabel.forEach(element => element.classList.toggle("dark"));

    attribution.classList.toggle("dark");
}

