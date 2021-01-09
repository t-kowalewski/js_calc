// Initial Data
const defaultResult = 0
let currentResult = defaultResult;

// Event Listenteners - Calc Buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// Calculation Logic - Functions
function add() {
  const enteredNumber = userInput.valueAsNumber;
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(calcDescription, currentResult);
}

function subtract() {
  const enteredNumber = userInput.valueAsNumber;
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult -= enteredNumber;
  outputResult(calcDescription, currentResult);
}

function multiply() {
  const enteredNumber = userInput.valueAsNumber;
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult *= enteredNumber;
  outputResult(calcDescription, currentResult);
}

function divide() {
  const enteredNumber = userInput.valueAsNumber;
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult /= enteredNumber;
  outputResult(calcDescription, currentResult);
}