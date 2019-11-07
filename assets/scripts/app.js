console.log("app is active0");
const defaultResult = 0;
let currentResult = defaultResult;
// get value from userinput
function getUserInput() {
  return parseInt(userInput.value);
}
//show result calc
function createAndwriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//process add number
function add() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enterNumber;
  createAndwriteOutput("+", initialResult, enterNumber);
}

//process minus number
function minus() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enterNumber;
  createAndwriteOutput("-", initialResult, enterNumber);
}

// process multiple number
function multiple() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enterNumber;
  createAndwriteOutput("x", initialResult, enterNumber);
}

//process divide number
function divide() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enterNumber;
  createAndwriteOutput(":", initialResult, enterNumber);
}

//when the button calc click will be call the function
addBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
multipleBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
