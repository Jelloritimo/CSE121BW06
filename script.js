const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const welcomeOne = document.getElementById("letters");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const answerResults = document.getElementById("results");
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    welcomeOne.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.map(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(selection){
    const selectedButton = selection.target;
    const correct = selectedButton.dataset.correct;
    (document.body, correct);
    Array.from(answerButtonsElement.children).map(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    }
    else{
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct) {
        element.classList.add("correct");
    }
    else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question: "Who said the famous line 'You shall not pass!!' in the Lord of the Rings trilogy?",
        answers: [
            { text: "Gandalf", correct:true},
            { text: "Bilbo Baggins", correct:false},
            { text: "Frodo", correct:false},
            { text: "R2-D2", correct:false}

        ]
    },
    {
        question: "Which is the #1 grossing movie of all time?",
        answers: [
            { text: "Avengers: Endgame", correct:false},
            { text: "Back To The Future", correct:false},
            { text: "Avatar", correct:true},
            { text: "Titanic", correct:false}

        ]
    },
    {
        question: "What was the first James Bond film?",
        answers: [
            { text: "Goldfinger", correct:false},
            { text: "Dr. No", correct:true},
            { text: "Skyfall", correct:false},
            { text: "You Only Live Twice", correct:false}

        ]
    },
    {
        question: "Who played Han Solo in the Star Wars series?",
        answers: [
            { text: "Harrison Ford", correct:true},
            { text: "Michael Gambon", correct:false},
            { text: "Tom Hanks", correct:false},
            { text: "Leonardo DiCaprio", correct:false}

        ]
    },
    {
        question: "When did the film 'Batman Begins' of the dark night trilogy release?",
        answers: [
            { text: "2008", correct:false},
            { text: "2012", correct:false},
            { text: "1999", correct:false},
            { text: "2005", correct:true}

        ]
    },
    {
        question: "Who played the Green Goblin in 2002 box-office smash 'Spider-Man'?",
        answers: [
            { text: "Tobey Maguire", correct:false},
            { text: "Andrew Garfield", correct:false},
            { text: "Willem Dafoe", correct:true},
            { text: "Tom Holland", correct:false}

        ]
    },
    {
        question: "What was the car model that was used for the famous time machine in the film 'Back To The Future'?",
        answers: [
            { text: "DMC DeLorean", correct:true},
            { text: "The Batmoblile", correct:false},
            { text: "Ferrari Testarossa", correct:false},
            { text: "Lamborghini Countach", correct:false}

        ]
    },
    {
        question: "What was Disney Pixar's first ever film?",
        answers: [
            { text: "WALL-E", correct:false},
            { text: "Monsters, Inc.", correct:false},
            { text: "A Bug's Life", correct:false},
            { text: "Toy Story", correct:true}

        ]
    },
    {
        question: "Which is NOT the name of a child selected to tour the Wonka factory in Willy Wonka and the Chocolate Factory?",
        answers: [
            { text: "Veruca Salt", correct:false},
            { text: "Charlie Bucket", correct:false},
            { text: "Billy Warp", correct:true},
            { text: "Charlie Brown", correct:false}

        ]
    },
    {
        question: "How many 'Star Wars' movies are there?",
        answers: [
            { text: "3", correct:false},
            { text: "6", correct:false},
            { text: "9", correct:false},
            { text: "12", correct:true}

        ]
    }

];