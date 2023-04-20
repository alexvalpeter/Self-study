const categoryNames = document.querySelectorAll(".category-name");
const categoryScores = document.querySelectorAll(".numerator");
const categoryIcons = document.querySelectorAll(".icon");


/*
* Fetch category names, scores, and icons from local JSON file
* Update HTML with data
*/
fetch('./data.json')
    .then((response) => response.json())
    .then(function (data) {
        for(i = 0; i < categoryNames.length; i++){
            categoryNames[i].innerHTML = data[i]["category"];
            categoryScores[i].innerHTML = data[i]["score"];
            categoryIcons[i].src = data[i]["icon"];
        }
    }); 

    






