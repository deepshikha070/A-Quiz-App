const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, Newyork is the world's?",
        answers: [
            { text: "Largest railway station", correct: true },
            { text: "Highest railway station", correct: false },
            { text: "Longest railway staion", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "BhutN", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },

    {
        question: "Entomology is the science that studies?",
        answers: [
            { text: "Behavior of human beings", correct: false },
            { text: "Insects", correct: true },
            { text: "The origin and history of technical and scientific terms", correct: false },
            { text: "The formation of rocks", correct: false },
        ]
    },

    {
        question: "For which of the following disciplines is Nobel Price Awarded?",
        answers: [
            { text: "Physics and Chemistry", correct: false },
            { text: "Physiology or Medicine", correct: false },
            { text: "Literature, Peace and Economics", correct: false },
            { text: "All of the above", correct: true },
        ]
    },

    {
        question: "Hitler party which came into power in 1933 is known as?",
        answers: [
            { text: "Labour Party", correct: false },
            { text: "Nazi Party", correct: true },
            { text: "Ku-Klux-Klan", correct: false },
            { text: "Demoncratic Party", correct: false },
        ]
    },

    {
        question: "FFC stands for?",
        answers: [
            { text: "Foreign Finance Corporation", correct: false },
            { text: "Film Finance Corporation", correct: true },
            { text: "Federation of Football Council", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "Epsom (England) is the place associated with?",
        answers: [
            { text: "Hourse racing", correct: true },
            { text: "Polo", correct: false },
            { text: "Shooting", correct: false },
            { text: "Snooker", correct: false },
        ]
    },

    {
        question: "First human heart transplant operation conducted by Dr. Christian Barnard on Louis Washkansky, was conducted in?",
        answers: [
            { text: "1967", correct: true },
            { text: "1968", correct: false },
            { text: "1958", correct: false },
            { text: "1922", correct: false },
        ]
    },

    {
        question: "Galileo was an Italian astronomer who?",
        answers: [
            { text: "Developed the telescope", correct: false },
            { text: "Discovered four satellites of Jupiter", correct: false },
            { text: "Discovered that the movement of pendulum produces a regular time measurement", correct: false },
            { text: "All of the above", correct: true },
        ]
    },

    {
        question: "Exposure to sunlight helps a person improve his health because?",
        answers: [
            { text: "The infrared light kills bacteria in the body", correct: false },
            { text: "Resistance power increases", correct: false },
            { text: "The pigment cells in the skin get stimulated and produse a healthy tan", correct: false },
            { text: "The ultraviolet rays convert skin oil into Vitamin D", correct: true },
        ]
    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}






nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();