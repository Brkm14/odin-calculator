const screen = document.querySelector(".screen");
let currentNumber = '';
let currentOperator = '';
let result = 0;

function updateScreen(value) {
  if (value === '+' || value === '=') {
    return;
  }
  screen.textContent += value;
  currentNumber += value;
}

function clearScreen() {
  screen.textContent = "";
  currentNumber = '';
  currentOperator = '';
  result = 0;
}

function backspace() {
  screen.textContent = screen.textContent.slice(0, -1);
  currentNumber = currentNumber.slice(0, -1);
}

function addOperator(operator) {
  if (currentOperator === '+') {
    result += parseFloat(currentNumber);
  } else if (currentOperator === '-') {
    result -= parseFloat(currentNumber);
  } else if (currentOperator === '*') {
    result *= parseFloat(currentNumber);
  } else if (currentOperator === '/') {
    result /= parseFloat(currentNumber);
  } else {
    result = parseFloat(currentNumber);
  }

  currentNumber = '';
  currentOperator = operator;
  screen.textContent += operator;
}

function calculate() {
  if (currentOperator === '+') {
    result += parseFloat(currentNumber);
  } else if (currentOperator === '-') {
    result -= parseFloat(currentNumber);
  } else if (currentOperator === '*') {
    result *= parseFloat(currentNumber);
  } else if (currentOperator === '/') {
    result /= parseFloat(currentNumber);
  } 

  screen.textContent = result.toString();
  currentNumber = result.toString();
  currentOperator = '';
  result = 0;
}


function calculatePercentage() {
    const number = parseFloat(currentNumber);
    if (!isNaN(number)) {
      result = number / 100;
    }
  
    screen.textContent = result.toString();
    currentNumber = result.toString();
    currentOperator = '';
  }