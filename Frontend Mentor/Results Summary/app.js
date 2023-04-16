const categoryNames = document.querySelectorAll(".category-name");
const categoryScores = document.querySelectorAll(".numerator");
const categoryIcons = document.querySelectorAll(".icon");

fetch('./data.json')
    .then((response) => response.json())
    .then(function (data) {
        for(i = 0; i < categoryNames.length; i++){
            categoryNames[i].innerHTML = data[i]["category"];
            categoryScores[i].innerHTML = data[i]["score"];
            categoryIcons[i].src = data[i]["icon"];
        }
    }); 

    






