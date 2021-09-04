// Use of const vs var - https://www.w3schools.com/js/js_const.asp
// use of e.target https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//Timer https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
var scoreGame = 0;
var interval;
var timer;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);

  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function startTimer(duration, display) {
  console.log(minutes, seconds);
  var timer = duration,
    minutes,
    seconds;
  interval = setInterval(function () {
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
      scoreGame++;
    } else {
      // timer -= 5 //! This is not working
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
//! create a button to show scores
//!button hides current items and displays scores
//!and then reverse
//!remove.child

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    submitButton.classList.remove("hide");
  } else {
    clearInterval(interval);
    alert("Your score is: " + scoreGame); //!Score alert
    var x = getPlayerName(); //!Get player's name
    highScore(x);
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

var getPlayerName = function () {
  var name = "";
  //*************/
  while (name === "" || name === null) {
    name = prompt("What is your name?");
  }
  //*************/
  console.log("Player's name is " + name);
  return name;
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
