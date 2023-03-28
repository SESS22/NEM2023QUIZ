const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-ctn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') 
const questionData = [
    //NOTE ------S0----------
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
                    {text: "False", correct: true}], 
            }
        ]},

    //NOTE ------S1----------
    {facts: "Work signed by an engineer invokes professional and legal authority.",
        questions: [    
            {question: "The difference between a software engineer and a software developer is?", 
                answers: [
                    {text: "Compensation", correct: false},
                    {text: "Responsibility", correct: true},
                    {text: "Workload", correct: false},
                    {text: "Experience", correct: false}]
            }
        ]},
    
    //NOTE ------S2----------
    {facts: "Becoming a professional engineer requires an application detailing academic and work experience.",
        questions:[     
            {question: "You are a professional engineer after graduating from an accredited program.", 
                answers: [
                    {text: "True", correct: false},
                    {text: "False", correct: true}]
            },
            {question: "How many years of industry experience do you need to apply to be a professional engineer in Ontario?", 
                answers: [
                    {text: "1", correct: false},
                    {text: "2", correct: false},
                    {text: "3", correct: false},
                    {text: "4", correct: true}] 
            }
        ]},
    
    //NOTE ------S3----------
    {facts: "Engineering graduates in Canada receive an Iron Ring to wear on the little finger of their dominant hand.",
         questions:[  
            {question: "What is the symbol of Canadian engineers?", 
                answers: [
                    {text: "Silver Maple Leaf", correct: false},
                    {text: "Steel Wrench", correct: false},
                    {text: "Iron Ring", correct: true},
                    {text: "Bronze Compass", correct: false}]
            },
            {question: "Where do you wear the Iron Ring?", 
                answers: [
                    {text: "Ring Finger of Non-Dominant Hand", correct: false},
                    {text: "Ring Finger of Dominant Hand", correct: false},
                    {text: "Little Finger of Non-Dominant Hand", correct: false},
                    {text: "Little Finger of Dominant Hand", correct: true}], 
                }
        ]},
    
    //NOTE ------S4---------- CIVIL ENGINEERING
    {facts: "Six major types of bridges are: arch, beam, cable-stayed, cantilever, suspension, and truss.",
        questions:[  
            {question: "Which of the following is not a type of bridge?", 
                answers: [
                    {text: "Vault", correct: true},
                    {text: "Beam", correct: false},
                    {text: "Cantilever", correct: false},
                    {text: "Truss", correct: false}] 
            },
            {question: "Cable-stayed bridges are mechanically different compared to suspension bridges?", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}]
            },
            {question: "The bridge with the longest cantilever span is?", 
                answers: [
                    {text: "San Francisco-Oakland Bay Bridge", correct: false},
                    {text: "Forth Bridge", correct: false},
                    {text: "Confederation Bridge", correct: false},
                    {text: "Pont de Quebec", correct: true}], 
            }
        ]},
    
    //NOTE ------S5----------
    {facts: "Ontario Highway 401 is the busiest highway in North America with a maximum width of 18 lanes.",
        questions:[  
            {question: "Which is the busiest highway in North America?", 
                answers: [
                    {text: "Texas Katy Freeway", correct: false},
                    {text: "Trans-Canada Highway", correct: false},
                    {text: "California Interstate 405", correct: true},
                    {text: "Ontario Highway 401", correct: true}]
            },
            {question: "How many lanes does Highway 401 reach at its widest?", 
                answers: [
                    {text: "12", correct: false},
                    {text: "18", correct: true},
                    {text: "14", correct: false},
                    {text: "16", correct: false}], 
            }
        ]},
    
    //NOTE ------S6----------
    {facts: "Twice as much concrete is used relative to all other construction materials combined.",
        questions:[  
            {question: "What is the most commonly used construction material?", 
                answers: [
                    {text: "Concrete", correct: true},
                    {text: "Wood", correct: false},
                    {text: "Steel", correct: false},
                    {text: "Glass", correct: false}]
            },
            {question: "How many billion tons of concrete is produced annually?", 
                answers: [
                    {text: "1", correct: false},
                    {text: "2", correct: false},
                    {text: "3", correct: false},
                    {text: "4", correct: true}], 
            }
        ]},

    //NOTE ------S7----------
    {facts: "Landfill used in civil engineering projects can consist of any cohesive aggregate or even other voluminous products.",
        questions:[  
            {question: "Which of the following is not used as engineered fill in earthworks?", 
                answers: [
                    {text: "Shredded Tires", correct: false},
                    {text: "All are used", correct: true},
                    {text: "Styrofoam", correct: false},
                    {text: "Coal Ash", correct: false}]
            },
        ]},

    //NOTE ------S8---------- MECHANICAL ENGINEERING
    {facts: "Modern automobile engines typically operate around 2000-3000 RPM.",
        questions:[  
            {question: "The typical revolutions per minute of an automobile engine while cruising is?", 
                answers: [
                    {text: "1000-2000", correct: false},
                    {text: "2000-3000", correct: true},
                    {text: "3000-4000", correct: false},
                    {text: "4000-5000", correct: false}]
            },
        ]},

    //NOTE ------S9----------
    {facts: "New high bypass turbofans on new wide body aircraft have different low pressure and high pressure RPMs.",
        questions:[  
            {question: "What is the revolutions per minute of the gas turbine in a modern jet engine?", 
                answers: [
                    {text: "0-3000", correct: false},
                    {text: "3000-6000", correct: false},
                    {text: "6000-9000", correct: false},
                    {text: "9000-12000", correct: true}]
            },
            {question: "What is the revolutions per minute of the turbofan in a modern jet engine?", 
                answers: [
                    {text: "1000-2000", correct: false},
                    {text: "2000-3000", correct: true},
                    {text: "3000-4000", correct: false},
                    {text: "4000-5000", correct: false}], 
            }
        ]},

    //NOTE ------S10----------
    {facts: "Delta-V is a measure of how much a machine can change its velocity (therefore, the energy).",
        questions:[  
            {question: "In rocketry, what is delta-v a measure of?", 
                answers: [
                    {text: "Velocity", correct: false},
                    {text: "Altitude", correct: false},
                    {text: "Distance", correct: false},
                    {text: "Energy", correct: true}]
            },
            {question: "It takes much more energy to match the speed of the ISS than to reach the altitude of the ISS.", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}], 
            }
        ]},

    //NOTE ------S11---------- SOFTWARE ENGINEERING
    {facts: "More than 85% of Python installations use the reference implementation made in C.",
        questions:[  
            {question: "The Python programming language runs on C.", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}]
            },
            {question: "You can use C functions in Python.", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}],
            }
    ]},

    //NOTE ------S12----------
    {facts: "The software development life cycle consists of analysis, design, implementation, testing, deployment, and maintenance.",
        questions:[  
            {question: "Which of the following is not part of the software development life cycle?", 
                answers: [
                    {text: "Organization", correct: true},
                    {text: "Deployment", correct: false},
                    {text: "Maintenance", correct: false},
                    {text: "Implementation", correct: false}]
            },
            {question: "Agile development is where you complete all of one software development lifecycle step before starting the next phase.", 
                answers: [
                    {text: "True", correct: false},
                    {text: "False", correct: true}]
            }
        ]},

    //NOTE ------S13----------
    {facts: "C# originated from the C family of languages but has developed a much stronger type system, similar to Java.",
        questions:[  
            {question: "Which other programming language is C# most similar to?", 
                answers: [
                    {text: "Javascript", correct: false},
                    {text: "Java", correct: true},
                    {text: "C", correct: false},
                    {text: "C++", correct: false}]
            }
        ]},

    //NOTE ------S14----------
    {facts: "Assembly is a human readable but one to one abstraction of machine instructions (code).",
        questions:[
            {question: "Programs are compiled to assembly and to run on a computer.", 
                answers: [
                    {text: "True", correct: false},
                    {text: "False", correct: true}]
            },
            {question: "Assembly is closest to which programming language?", 
                answers: [
                    {text: "Python", correct: false},
                    {text: "Java", correct: false},
                    {text: "C++", correct: false},
                    {text: "C", correct: true}], 
                },
            {question: "Assembly is closest to which programming language?", 
                answers: [
                    {text: "Python", correct: false},
                    {text: "Java", correct: false},
                    {text: "C++", correct: false},
                    {text: "C", correct: true}], 
            }
        ]},

    //NOTE ------S15----------
    {facts: "The Mars Climate Orbiter was lost in 1999 due to a unit mismatch between two software systems.",
        questions:[  
            {question: "What problem caused the loss of the Mars Climate Orbiter?", 
                answers: [
                    {text: "Mismatched Unit Conversion", correct: true},
                    {text: "Segmentation Fault", correct: false},
                    {text: "Stuck Antenna", correct: false},
                    {text: "Micrometeorite Damage", correct: false}]
            },
            {question: "Of the 70 spacecraft launched and destined for Mars, how many were successful?", 
                answers: [
                    {text: "29", correct: false},
                    {text: "43", correct: false},
                    {text: "37", correct: true},
                    {text: "51", correct: false}], 
            }
        ]},

    //NOTE ------S16---------- MATERIAL ENGINEERING
    {facts: "Superalloys are alloys with the ability to operate at a very high melting point.",
        questions:[  
            {question: "Superalloys are alloys with the ability to operate at a very high melting point.", 
                answers: [
                    {text: "Conductivity", correct: false},
                    {text: "Hardness", correct: false},
                    {text: "Thermal Resistance", correct: true},
                    {text: "Density", correct: false}]
            },
            {question: "In which of the following would superalloys be used?", 
                answers: [
                    {text: "Submarine", correct: false},
                    {text: "Glider", correct: false},
                    {text: "Particle Accelerator", correct: false},
                    {text: "Coal Power Plant", correct: true}], 
            }
        ]},

    //NOTE ------S17----------
    {facts: "Superconductors are materials with no electrical resistance but require high pressures and/or very low temperatures.",
        questions:[  
            {question: "High-temperature superconductors are superconducting materials that operate above?", 
                answers: [
                    {text: "21 C", correct: false},
                    {text: "-93 C", correct: false},
                    {text: "156 C", correct: false},
                    {text: "-196 C", correct: true}]
            }
        ]},

    //NOTE ------S19---------- COMPUTER ENGINEERING
    {facts: "ARM is the most well known reduced instruction set computer architecture, with a strong emphasis on efficiency.",
        questions:[  
            {question: "", 
                answers: [
                    {text: "False", correct: true},
                    {text: "True", correct: false}]
            },
            {question: "Modern x86-64 and ARM processors have no inherent architectural differences regarding power efficiency.", 
                answers: [
                    {text: "True", correct: false},
                    {text: "False", correct: true}], 
            }
        ]},

    //NOTE ------S20----------
    {facts: "DDR SDRAM stands for double data rate synchronous dynamic random access memory and is the standard for computer RAM.",
        questions:[  
            {question: "Which word is not part of the acronym for computer memory DDR SDRAM?", 
                answers: [
                    {text: "Double", correct: false},
                    {text: "Static", correct: true},
                    {text: "Random", correct: false},
                    {text: "Rate", correct: false}]
            },
            {question: "On each clock cycle, each DDR SDRAM unit transfers how many bytes of data?", 
                answers: [
                    {text: "8", correct: false},
                    {text: "16", correct: true},
                    {text: "32", correct: false},
                    {text: "64", correct: false}], 
            },
            {question: "DDR SDRAM is volatile memory.", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}]
            },
            {question: "The fastest memory for a processor to access is?", 
                answers: [
                    {text: "HDD", correct: false},
                    {text: "SSD", correct: false},
                    {text: "RAM", correct: false},
                    {text: "Cache", correct: true}], 
            }
        ]},
    
    //NOTE ------S21----------
    {facts: "FPGAs (field programmable gate arrays) are unique processors that can physically change their logic circuits through reprogramming.",
        questions:[  
            {question: "CPUs can be reprogrammed in the same way as FPGAs.", 
                answers: [
                    {text: "True", correct: false},
                    {text: "False", correct: true}]
            },
            {question: "Assuming same clock speed, an FPGA will complete the same workload faster than a CPU.", 
                answers: [
                    {text: "True", correct: true},
                    {text: "False", correct: false}], 
            }
        ]},

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


