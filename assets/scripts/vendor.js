const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentCalculationOutput = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");

function outputResult(result, text) {
  currentResultOutput.innerHTML = result;
  currentCalculationOutput.innerHTML = text;
}

console.log("hey");
