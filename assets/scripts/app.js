// Initial Data
const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

// Event Listenteners - Calc Buttons
clearBtn.addEventListener('click', clear);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// Functions
// Calculation Output & Logging Logic
function getUserInput() {
  return userInput.valueAsNumber;
}

function writeDescriptAndResult(originalResult, operator, newNumber) {
  const calcDescription = `${originalResult} ${operator} ${newNumber}`;
  outputResult(calcDescription, currentResult);
}

function addLogEntry(operation, num1, num2) {
  const logEntrie = {
    operation: operation,
    num1: num1,
    num2: num2,
    result: currentResult
  }
  logEntries.push(logEntrie);
  // console.log(logEntries);
}

// Calc Operations & Clear
function add() {
  const enteredNumber = getUserInput();
  const initResult = currentResult;
  currentResult += enteredNumber;
  writeDescriptAndResult(initResult, '+', enteredNumber);
  
  addLogEntry('ADD', initResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initResult = currentResult;
  currentResult -= enteredNumber;
  writeDescriptAndResult(initResult, '-', enteredNumber);

  addLogEntry('SUBTRACT', initResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initResult = currentResult;
  currentResult *= enteredNumber;
  writeDescriptAndResult(initResult, '*', enteredNumber);

  addLogEntry('MULTIPLY', initResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initResult = currentResult;
  currentResult /= enteredNumber;
  writeDescriptAndResult(initResult, '/', enteredNumber);

  addLogEntry('DIVIDE', initResult, enteredNumber);
}

function clear() {
  currentResult = 0;
  userInput.value = '';
  outputResult('', currentResult);
}