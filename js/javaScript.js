//TODO Questions
//TODO Answers
//TODO set localStorage
//TODO get localStorage
//TODO Validate answers
//TODO
// Use of const vs var - https://www.w3schools.com/js/js_const.asp

const startButton = document.getElementById('start-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startQuiz)
submitButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    // ! start timer should initiate here
    // ! should I have a time for the whole thing or a timer for the whole thing
    // ! or both?
    // ! OVERACHIVER note - can you give extra points to user for fastest responses?


}

function setNextQuestion () {
    console.log('Next Question')
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      }  
      )
}

function resetState() {
    console.log('resetState')
    clearStatusClass(document.body)
    submitButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    submitButton.classList.remove('hide')
    } else {
        alert('Your score is: + score amount')
        alert('You have completed the quiz, if you would like to do it again, hit restart!')
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
{
    question: 'question 1  goes here',
    answers: [
        {text: 'correct 1  answer', correct: true }, //true is specific to the correct answer
        {text: 'incorrect 2 answer', correct: false }, 
        {text: 'incorrect 3  answer', correct: false },
        {text: 'incorrect 4 answer', correct: false }
    ]
},

{
    question: 'question 2 goes here',
    answers: [
        {text: 'correct answer', correct: true }, //true is specific to the correct answer
        {text: 'incorrect answer1', correct: false }, 
        {text: 'incorrect answer2', correct: false },
        {text: 'incorrect answer3', correct: false }
    ]
},
{
    question: 'quesiton 3  goes here',
    answers: [
        {text: 'correct answer', correct: true }, //true is specific to the correct answer
        {text: 'incorrect answer 4', correct: false }, 
        {text: 'incorrect answer 5', correct: false },
        {text: 'incorrect answer 6', correct: false }
    ]
}
]