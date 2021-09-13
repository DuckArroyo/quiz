//TODO Questions
//TODO Answers
//TODO set localStorage
//TODO get localStorage
// Use of const vs var - https://www.w3schools.com/js/js_const.asp
// use of e.target https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//Timer https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nameButton = document.getElementById("#name-btn");
const nameContainerElement = document.getElementById("#name-container");

var scoreGame = 0;

let shuffledQuestions, currentQuestionIndex;

nameButton.addEventListener("click", getPlayerName);
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

//TODO Timer
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};
//TODO End timer

function setNextQuestion() {
  console.log("Next Question");
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
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

function resetState() {
  console.log("resetState");
  clearStatusClass(document.body);
  submitButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  addToScore();
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    submitButton.classList.remove("hide");
  } else {
    alert("Your score is: " + score + " amount");
    getPlayerName();
    alert(
      "You have completed the quiz, if you would like to do it again, hit restart!"
    );
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

//todo get user ID
var getPlayerName = function () {
  var name = document.getElementById("#name-input").value;
  //*************/
  while (name === "" || name === null) {
    name = prompt("What is your name?");
  }
  //*************/
  console.log("Player's name is " + name);

  var playerInfo = {
    name: name,
    score: scoreGame,
  };

  return playerInfo;
};

//TODO when correct answer is selected add 1 point
var score = function addToScore() {
  if (correct === true) {
    scoreGame++;
  } else {
    timer--;
  }

  console.log(score);
};

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Is JavaScript easy?",
    answers: [
      { text: "Yes", correct: true }, //true is specific to the correct answer
      { text: "NOO!", correct: false },
      { text: "Go Away!!", correct: false },
      { text: "I will shank you", correct: false },
    ],
  },

  {
    question: "How do you call a function?",
    answers: [
      { text: "function nameOfFunction()", correct: true }, //true is specific to the correct answer
      { text: "1-800-Function", correct: false },
      { text: "Ask a BSC", correct: false },
      { text: "nameOfFunction()", correct: false },
    ],
  },
  {
    question: "Types of data",
    answers: [
      { text: "Strings, Boleans, Intergers", correct: true }, //true is specific to the correct answer
      { text: "Nodes, Objects, Whole numbers", correct: false },
      { text: "[], {}, ()", correct: false },
      { text: "( i = 0; i < x.lenght; i-- )", correct: false },
    ],
  },
];
