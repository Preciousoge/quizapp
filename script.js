
const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerbuttonElement = document.getElementById('answer')

let shuffleQuestions, currentQuestionIndex

let countRightAnswers = 0

startButton.addEventListener('click', start)
nextButton.addEventListener('click',() => {
	currentQuestionIndex ++
	nextQuestion()
})

function start(){
	//console.log('it took more than an hour to cry about this, dear night King, have mercy')
	startButton.classList.add('hide')
	shuffleQuestions = questions.sort(() => Math.random()- .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	nextQuestion()
	countRightAnswers = 0;
}


function nextQuestion(){
	reset()
	showQuestion(shuffleQuestions[currentQuestionIndex])
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
		button.addEventListener('click', pickAnswer)
		answerbuttonElement.appendChild(button)
	})
}

function reset() {
	nextButton.classList.add('hide')
	while (answerbuttonElement.firstChild){
		answerbuttonElement.removeChild
			(answerbuttonElement.firstChild)
	}	
}


function pickAnswer(e){
	const selectedOption = e.target
	const correct = selectedOption.dataset.correct
	setStatusClass(document.body, correct)
  Array.from(answerbuttonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
	if(shuffleQuestions.length > currentQuestionIndex + 1){
		nextButton.classList.remove('hide')
	}else{


		document.getElementById('right-answers').innerHTML = 


		"You scored " +   countRightAnswers + " out of " +    questions.length 

		/*startButton.innerText = "Restart"
		startButton.classList.remove('hide')*/

	}
	if (selectedOption.dataset = correct) {
    countRightAnswers++
	}
//document.getElementById('right-answers').innerHTML = "you scored  " +    countRightAnswers + "out of" +    questions.length
}

function setStatusClass(element, correct){
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	}else{
		element.classList.add('wrong')
	}
}

function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions =[
	{
		question : 'Who is the highest goalscorer in the history of the UEFA Champions League?',
		answers: [
			{ text: 'Zlatan Ibrahimovic', correct: false},
			{ text: 'Raul', correct: false},
			{ text: 'Cristiano Ronaldo', correct: true},
			{ text : 'Lionel Messi', correct: false}
		]
	},
	{
		question: 'Where was the Champions League Final played in 2008 ?',
		answers: [
		{text: 'Cardiff', correct:false},
		{text: 'Wembley', correct:false},
		{text: 'Moscow', correct:true},
		{text: 'Munich', correct:false}
		]
	},
	{
		question: 'Who is the oldest player to score in a Champions league game?',
		answers: [
		{text: 'Daniele De Rossi',correct:false},
		{text: 'Francesco Totti', correct:true},
		{text: 'Laurent Blanc',correct:false},
		{text: 'Ryan Giggs',correct:false}
		]
	},

	{
		question: 'What team does Jeff support?😉',
		answers: [
		{text: 'Manchester United',correct:false},
		{text: 'Barcelona', correct:true},
		{text: 'Bayern Munich',correct:false},
		{text: 'Inter Milan',correct:false}
		]
	},

	{
		question: 'Who is the youngest player to score in a Champions league game?',
		answers: [
		{text: 'Cesc Fabregas',correct:false},
		{text: 'Eric Haaland', correct:false},
		{text: 'Ansu Fati',correct:true},
		{text: 'Peter Ofori-Quaye',correct:false}
		]
	}
]