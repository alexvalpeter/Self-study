
const questions = document.querySelectorAll(".question-heading");

questions.forEach( function(question) {
    question.addEventListener( "click", function(e) {
        // Expand to reveal answer
        const questionContainer = e.currentTarget.parentElement;
        questionContainer.classList.toggle("expanded");

        // Collapse any other expanded question
        questions.forEach( function(questionElement) {
            if (questionElement !== question) {
                questionElement.parentElement.classList.remove("expanded");
            }
        })
    });
});