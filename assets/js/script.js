const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffQuestions, currentQuestionIndex

//starting the quiz
startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
shuffQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
showQuestion(shuffQuestions[currentQuestionIndex])
}

//timer with alert
let timeLeft = 60;
let timer = setInterval(() => {
timeLeft--;
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;
document.getElementById("timer").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
if (timeLeft === 0) {
clearInterval(timer);
alert("Time's up!");
}
}, 1000);


//Timer
/*var startTimer
var timeLeft = 60;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);

  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}*/

//question shuffler
function nextQuestion() {
  resetState()
  currentQuestionIndex++
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
  //nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  nextQuestion()
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

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

//question Index
const questions = [
  {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
    answers: [
      {text: 'Function', correct:false}, 
      {text: 'Event', correct:false},
      {text: 'Boolean', correct: true},
      {text: 'Condition', correct: false}
    ]
  },
  {
    question: 'What is the correct HTML element for a line break?',
    answers: [
      {text: '<brk>', correct:false},
      {text: '<break>', correct:false},
      {text: '<bk>', correct:false},
      {text: '<br>', correct:true}
    ]
  },
  {
    question: 'What does Http stand for?',
    answers: [
      {text: 'Hyper transfer text protocol', correct:false},
      {text: 'Hot tamales to prepare', correct:false},
      {text: 'Hyper text transfer protocol', correct:true},
      {text: 'Hyper text markup language', correct:false}
  ]
},
{
    question: 'Creating an object is called?',
    answers: [
      {text: 'Instantiation', correct:true},
      {text: 'Variable', correct:false},
      {text: 'Reference', correct:false},
      {text: 'Abstraction', correct:false},
  ]
},
{
  question: 'In CSS and HTML what colors are displayed by combining these three shades?',
  answers: [
    {text: 'black, white, and grey', correct:false},
    {text: 'green, red, yellow', correct:false},
    {text: 'red, green, blue', correct:true},
    {text: 'red, green, black', correct:false}
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

