
const startButton = document.getElementById('startButton')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerbuttonElement = document.getElementById('answer')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', start)

function start(){
	console.log('oya')
	startButton.classList.add('hide')
	shuffleQuestions = questions.sort(() => Math.random()- .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	nextQuestion()
}


function nextQuestion(){
	showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('buttons')
		if (answer.correct) {
			button.dataset.correct = answer.correct 
		}
		button.addEventListener('click', pickAnswer)
		answerbuttonElement.appendChild('buttons')
	})
}
function pickAnswer(){

}

const questions =[
	{
		question : 'Who is the highest goalscorer in the history of the UEFA Champions League?',
		answers: [
			{ text: 'Zlatan Ibrahimovic', correct:false},
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
	}
]