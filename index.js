let countA = 0;
let countB = 0;
let countC = 0;

const correctA = document.querySelector('#correct-a');
const correctB = document.querySelector('#correct-b');
const correctC = document.querySelector('#correct-c');
const correctD = document.querySelector('#correct-d');
const correctE = document.querySelector('#correct-e');
const correctF = document.querySelector('#correct-f');
const correctG = document.querySelector('#correct-g');
const correctH = document.querySelector('#correct-h');
const correctI = document.querySelector('#correct-i');
const correctJ = document.querySelector('#correct-j');
const correctK = document.querySelector('#correct-k');
const correctL = document.querySelector('#correct-l');
const correctM = document.querySelector('#correct-m');
const correctN = document.querySelector('#correct-n');
const correctO = document.querySelector('#correct-o');
const correctP = document.querySelector('#correct-p');
const correctQ = document.querySelector('#correct-q');
const correctR = document.querySelector('#correct-r');


const correctAnsA = [correctA, correctB, correctC, correctD, correctE, correctF];
const correctAnsB = [correctG, correctH, correctI, correctJ, correctK, correctL];
const correctAnsC = [correctM, correctN, correctO, correctP, correctQ, correctR];

correctAnsA.forEach(option => {
    option.addEventListener('click', function(e) {
        e.target.disabled = true;   //Prevents double-clicking
        countA++;
        const result = document.querySelector('.resultA');
        result.innerText = `Your score in Topic 1 is: ${countA} out of 6`;
        const score = document.querySelector('.Score');
        score.innerText = `Your total score is ${countA + countB+ countC}`;
    })
})

correctAnsB.forEach(option => {
    option.addEventListener('click', function(e) {
        e.target.disabled = true;   //Prevents double-clicking
        countB++;
        const result = document.querySelector('.resultB');
        result.innerText = `Your score in Topic 2 is: ${countB} out of 6`;
        const score = document.querySelector('.Score');
        score.innerText = `Your total score is ${countA + countB+ countC}`;
       
    })
})

correctAnsC.forEach(option => {
    option.addEventListener('click', function(e) {
        e.target.disabled = true;   //Prevents double-clicking
        countC++;
        const result = document.querySelector('.resultC');
        result.innerText = `Your score in Topic 3 is: ${countC} out of 6`;
        const score = document.querySelector('.Score');
        score.innerText = `Your total score is ${countA + countB+ countC}`;
       
    })
})



