// Initial Data
const defaultResult = 0
let currentResult = defaultResult;

// Event Listenteners - Calc Buttons
addBtn.addEventListener('click', add);

// Calculation Logic - Functions
function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult += userInput.valueAsNumber;
  outputResult(calcDescription, currentResult);
}