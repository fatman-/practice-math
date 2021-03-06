const container = (document.querySelector('.container'));
const eq = document.querySelector('.equation');
let operator;
const btnNext = document.querySelector('#btn_next');
const operators = ['+', '-', '*'];
// const solutions = JSON.parse(localStorage.getItem('solutions')) || [];

// 1. Calculate random numbers

function randomNum(min, max) {
  return Math.floor(Math.random() * 1000) + 1;
}

// 2. Randomly select an operator
const randomOperator = operators[Math.floor(Math.random()*operators.length)];
console.log(randomOperator);

// 4. Populate the fields with randomly generated values
function calcValues() {
  const num1 = randomNum(10, 999);
  const num2 = randomNum(10, 999);
  eq.textContent = `
  ${num1} ${randomOperator} ${num2}`;
}

calcValues();

// 5. Randomly generate an operator but don't allow operators that lead to negative results
// Function to create operator that we then call in calcValues() for the operator

// 5. Calculate the value of each randomly generated equation


// 6. Generate a new equation when the user clicks on the "Next" button
btnNext.addEventListener('click', calcValues);