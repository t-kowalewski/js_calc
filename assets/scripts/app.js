// Initial Data
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Event Listenteners - Calc Buttons
clearBtn.addEventListener('click', clear);
addBtn.addEventListener('click', calculation.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculation.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculation.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculation.bind(this, 'DIVIDE'));

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
    result: currentResult,
  };
  logEntries.push(logEntrie);
  // console.log(logEntries);
}

// Calc - Main Logic, Operations & Clear
function calculation(calcOperation) {
  const enteredNumber = getUserInput();

  if (
    (calcOperation === 'ADD' ||
      calcOperation === 'SUBTRACT' ||
      calcOperation === 'MULTIPLY' ||
      calcOperation === 'DIVIDE') &&
    enteredNumber
  ) {
    const initResult = currentResult;
    let mathOperator;

    if (calcOperation === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calcOperation === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calcOperation === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calcOperation === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    writeDescriptAndResult(initResult, mathOperator, enteredNumber);
    addLogEntry(calcOperation, initResult, enteredNumber);
  }
}

// function add() {
//   calculation('ADD');
// }

// function subtract() {
//   calculation('SUBTRACT');
// }

// function multiply() {
//   calculation('MULTIPLY');
// }

// function divide() {
//   calculation('DIVIDE');
// }

function clear() {
  currentResult = 0;
  userInput.value = '';
  outputResult('Your calculation will appear here', currentResult);
}
