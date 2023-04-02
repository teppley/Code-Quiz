const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
shuffQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion()

}

function nextQuestion() {
  resetState()
  showQuestion(shuffQuestions[currentQuestionIndex])

}

function showQuestion(question){
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
  })
}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')  
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
    answers: [
      {text: 'Function'},
      {text: 'Event'},
      {text: 'Boolean'},
      {text: 'Condition'}
    
    ]
  }
]
























//Pseudo Code
//Create a "Start Quiz" button
  //Display a timer and highscore on the page 
//Create a series of questions with four possible answers
  //Display if the question was answered correct or incorrect
  //Incorrect answers affect the total time 
  //User moves through all the questions until they have finished the quiz or the timer reaches zero
//High scores are displayed and stored in local storage  

// Create new HTML file with reusable elements such as:

// // 1. Question container
// // 2. Initials container
// // 3. Timer container

// Create a new JS file with elements such as:

// // 1. Variables to keep track of quiz state
// // 2. Variables to reference DOM elements/elements to be created
// // 3. Sound effects (if you wanna get fancy)         
// // 4. Functions to start quiz, get question, and check answer, control the timer
// // 5. Function to save high scores to local storage

