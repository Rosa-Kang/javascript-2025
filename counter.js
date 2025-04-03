document.addEventListener('DOMContentLoaded', ()=> {
    const questionSelect = document.getElementById('questionSelect');
    const questionDisplay = document.getElementById('questionDisplay');
    const userAnswer = document.getElementById('userAnswer');
    const submitAnswer = document.getElementById('submitAnswer');
    const resultDisplay = document.getElementById('resultDisplay');

    const questions  = {
        1: {
            question: "Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).",
        },
        2: {
            question: "Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions. toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error 'Not Equal'. notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error 'Equal'",
        },
        3: {
            question: "Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: increment() increases the current value by 1 and then returns it. decrement() reduces the current value by 1 and then returns it. reset() sets the current value to init and then returns it.",
        },
        4: {
            question: "Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.",
        },
    }

    let currentQuestion = parseInt(questionSelect.value);

    const displayQuestion = (questionNumber)=> {
        const questionData = questions[questionNumber];
        questionDisplay.textContent = questionData.question || "";
        questionDisplay.style.display= questionData? "block"  : "none";
        userAnswer.style.display= questionData? "block"  : "none";
        submitAnswer.style.display = questionData? "block" : "none";
        currentQuestion = questionNumber
    }

    questionSelect.addEventListener("change", (e)=>{
        displayQuestion(parseInt(e.target.value))
    })
})
