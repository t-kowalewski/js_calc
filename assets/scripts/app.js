// Initial Data
const defaultResult = 0
let currentResult = defaultResult;

// Event Listenteners - Calc Buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// Calculation Output & Main Logic - Functions
function writeLogAndResult(originalResult, operator, newNumber) {
  const calcDescription = `${originalResult} ${operator} ${newNumber}`;
  outputResult(calcDescription, currentResult);
}

function add() {
  const enteredNumber = userInput.valueAsNumber;
  const initResult = currentResult;
  currentResult += enteredNumber;
  writeLogAndResult(initResult, '+', enteredNumber);
}

function subtract() {
  const enteredNumber = userInput.valueAsNumber;
  const initResult = currentResult;
  currentResult -= enteredNumber;
  writeLogAndResult(initResult, '-', enteredNumber);
}

function multiply() {
  const enteredNumber = userInput.valueAsNumber;
  const initResult = currentResult;
  currentResult *= enteredNumber;
  writeLogAndResult(initResult, '*', enteredNumber);
}

function divide() {
  const enteredNumber = userInput.valueAsNumber;
  const initResult = currentResult;
  currentResult /= enteredNumber;
  writeLogAndResult(initResult, '/', enteredNumber);
}