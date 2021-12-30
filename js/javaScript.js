const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const questionContainerElement = document.getElementById('question-container');
const scoresContainerElement = document.getElementById('scores-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log('Quiz started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  console.log('Next Question');
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      scoreGame++;
    } else {
      scoreGame--;
    }

    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  console.log('resetState');
  clearStatusClass(document.body);
  submitButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  console.log('selectAnswer');
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    submitButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


const questions = [
  {
    question: 'Is JavaScript easy?',
    answers: [
      { text: 'Yes', correct: true }, //true is specific to the correct answer
      { text: 'NOO!', correct: false },
      { text: 'Go Away!!', correct: false },
      { text: 'I will shank you', correct: false },
    ],
  },
  {
    question: 'How do you call a function?',
    answers: [
      { text: 'function nameOfFunction()', correct: true }, //true is specific to the correct answer
      { text: '1-800-Function', correct: false },
      { text: 'Ask a BSC', correct: false },
      { text: 'nameOfFunction()', correct: false },
    ],
  },
  {
    question: 'Types of data',
    answers: [
      { text: 'Strings, Boleans, Intergers', correct: true }, //true is specific to the correct answer
      { text: 'Nodes, Objects, Whole numbers', correct: false },
      { text: '[], {}, ()', correct: false },
      { text: '( i = 0; i < x.lenght; i-- )', correct: false },
    ],
  },
  {
    question: 'Is JavaScript easy? 2',
    answers: [
      { text: 'Yes', correct: true }, //true is specific to the correct answer
      { text: 'NOO!', correct: false },
      { text: 'Go Away!!', correct: false },
      { text: 'I will shank you', correct: false },
    ],
  },

  {
    question: 'How do you call a function? 2',
    answers: [
      { text: 'function nameOfFunction()', correct: true }, //true is specific to the correct answer
      { text: '1-800-Function', correct: false },
      { text: 'Ask a BSC', correct: false },
      { text: 'nameOfFunction()', correct: false },
    ],
  },
  {
    question: 'Types of data 2',
    answers: [
      { text: 'Strings, Boleans, Intergers', correct: true }, //true is specific to the correct answer
      { text: 'Nodes, Objects, Whole numbers', correct: false },
      { text: '[], {}, ()', correct: false },
      { text: '( i = 0; i < x.lenght; i-- )', correct: false },
    ],
  },
];
