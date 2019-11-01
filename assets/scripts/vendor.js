const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const minusBtn = document.getElementById("btn-minus");
const multipleBtn = document.getElementById("btn-multiple");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
