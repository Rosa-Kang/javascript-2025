document.addEventListener('DOMContentLoaded', ()=> {
    const questionSelect = document.getElementById('questionSelect');
    const questionDisplay = document.getElementById('questionDisplay');
    const userAnswer = document.getElementById('userAnswer');
    const checkAnswer = document.getElementById('checkAnswer');
    const answerDisplay = document.getElementById('answerDisplay');

    const questions  = {
        1: {
            question: "Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).",
            answer: "const createCounter = (n) => {\n    return () => {\n        return n++;\n    };\n};",
        },
        2: {
            question: "Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions. toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error 'Not Equal'. notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error 'Equal'",
            answer: "var expect = function(val) {\n    return {\n        toBe: (rel) => {\n            if (val === rel) {\n                return true;\n            } else {\n                throw new Error('Not Equal');\n            }\n        },\n        notToBe: (rel) => {\n            if (val !== rel) {\n                return true;\n            } else {\n                throw new Error('Equal');\n            }\n        }\n    };\n};",
        },
        3: {
            question: "Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: increment() increases the current value by 1 and then returns it. decrement() reduces the current value by 1 and then returns it. reset() sets the current value to init and then returns it.",
            answer: "var createCounter = function(init) {\n    let curr = init;\n    return {\n        increment: () => ++curr,\n        decrement: () => --curr,\n        reset: () => {\n            curr = init;\n            return curr;\n        }\n    };\n};",
        },
        4: {
            question: "Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.",
            answer: "var map = function(arr, fn) {\n    let returnedArr = [];\n    for (let i = 0; i < arr.length; i++) {\n        returnedArr[i] = fn(arr[i], i);\n    }\n    return returnedArr;\n};",
        },
    }

    let currentQuestion = parseInt(questionSelect.value);

    const displayQuestion = (questionNumber)=> {
        const questionData = questions[questionNumber];
        questionDisplay.textContent = questionData.question || "";
        questionDisplay.style.display= questionData? "block"  : "none";
        userAnswer.style.display= questionData? "block"  : "none";
        checkAnswer.style.display = questionData? "block" : "none";
        answerDisplay.style.display = "none";
        currentQuestion = questionNumber
    }

    const displayAnswer =(currentQuestion)=>{
        const answerData = questions[currentQuestion];
        answerDisplay.style.display = answerData? "block" : "none";
        if (answerData) {
            let formattedAnswer = answerData.answer.replace(/\n/g, '\n    ');
            answerDisplay.innerHTML = `<pre><code>${formattedAnswer}</code></pre>`;
        } else {
            answerDisplay.innerHTML = "";
        }
    }

    const clearUserAnswer  =  ()  => {
        document.getElementById('userAnswer').value = '';
    }

    questionSelect.addEventListener("change", (e)=>{
        displayQuestion(parseInt(e.target.value))
        clearUserAnswer();
    })

    checkAnswer.addEventListener("click", ()=>{
        displayAnswer(currentQuestion)
    })
})
