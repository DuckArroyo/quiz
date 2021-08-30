//TODO Questions
//TODO Answers
//TODO set localStorage
//TODO get localStorage
//TODO Validate answers
//TODO
// Use of const vs var - https://www.w3schools.com/js/js_const.asp

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNExtQuestion()
    // ! start timer should initiate here
    // ! should I have a time for the whole thing or a timer for the whole thing
    // ! or both?
    // ! OVERACHIVER note - can you give extra points to user for fastest responses?


}

function setNExtQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
{
    question: 'quesiton goes here',
    answers: [
        {text: 'correct answer', correct: true }, //true is specific to the correct answer
        {text: 'incorrect answer', correct: false }, 
        {text: 'incorrect answer', correct: false },
        {text: 'incorrect answer', correct: false }
    ]
}

]