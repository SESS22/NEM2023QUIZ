const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-ctn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') 
const questionData = [
    {facts: "The job title 'engineer' and any abbreviation or variation of it is a legally protected term.",
    questions:[ 
    {question: "Which job title is a legally protected designation?", 
    answers: [
        {text: "Software Engineer", correct: true},
         {text: "Software Technician", correct: false},
         {text: "Engineering Technician", correct: false},
         {text: "Engineering Technologist", correct: false}], 
         },
    {question: "You can use the job title software engineer on your resume.", 
         answers: [
             {text: "True", correct: false},
              {text: "False", correct: true},
                ], 
              }]},
    {facts: "Work signed by an engineer invokes professional and legal authority.",
    questions: [    
    {question: "The difference between a software engineer and a software developer is?", 
    answers: [
        {text: "Compensation", correct: false},
        {text: "Responsibility", correct: true},
        {text: "Workload", correct: false},
        {text: "Experience", correct: false}]}]},

        {facts: "Becoming a professional engineer requires an application detailing academic and work experience.",
    questions:[     {question: "You are a professional engineer after graduating from an accredited program.", 
    answers: [
        {text: "True", correct: false},
         {text: "False", correct: true},
           ], },
    {question: "How many years of industry experience do you need to apply to be a professional engineer in Ontario?", 
    answers: [
        {text: "1", correct: false},
         {text: "2", correct: false},
         {text: "3", correct: false},
         {text: "4", correct: true}], 
         }]},
    {facts: "Engineering graduates in Canada receive an Iron Ring to wear on the little finger of their dominant hand.",
         questions:[  {question: "What is the symbol of Canadian engineers?", 
         answers: [
             {text: "Silver Maple Leaf", correct: false},
             {text: "Steel Wrench", correct: false},
              {text: "Iron Ring", correct: true},
              {text: "Bronze Compass", correct: false},
                ], },
         {question: "Where do you wear the Iron Ring?", 
         answers: [
             {text: "Ring Finger of Non-Dominant Hand", correct: false},
              {text: "Ring Finger of Dominant Hand", correct: false},
              {text: "Little Finger of Non-Dominant Hand", correct: false},
              {text: "Little Finger of Dominant Hand", correct: true}], 
              }]}
] 

let shuffleSets = []
let currentSetIdx = 0
let questions = {}
let currentQuestionidx = 0
let previousSet = "";

nextButton.addEventListener('click', ()=> {
    currentQuestionidx++
    setNextQuestion()
})

const shuffleSet= () => {
    shuffleSets = questionData.sort(()=> Math.random() - .5)
    currentSetIdx = 0
    currentQuestionidx=0
    questions = shuffleSets[currentSetIdx]
    if(questions.facts === previousSet) {
        shuffleSet()
    } else {
        previousSet = questions.facts
    }
}
const startGame = () => {
    console.log('started')
    startButton.classList.add('hide')
    shuffleSet()
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

const setNextQuestion = () => {
    resetState()
    showQuestion(questions.questions[currentQuestionidx])
}

const showQuestion = (question) => {
    // const q = question.questions[currentQuestion]
    questionElement.innerText = question.question

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

const clearStatusClass = (element) => {

    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const setStatusClass = (element, correct) => {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const showFacts = () => {
    questionElement.innerText = `Fact: ${questions.facts}`
}


const selectAnswer = (e) => {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(questions.questions.length > currentQuestionidx + 1) {
        nextButton.classList.remove('hide')
    } else {
        showFacts()
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
        shuffleSet()
    }
    
}

const resetState = (e) => {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



startButton.addEventListener('click', startGame)


