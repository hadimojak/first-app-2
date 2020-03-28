const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNum() {
    return parseInt(userInput.value);
}

function createLogOutput(oprator, resultBeforeCal, calNumber) {
    const currentCalculation = `${resultBeforeCal} ${oprator} ${calNumber}`;
    outputResult(currentResult, currentCalculation);
}

function add() {
    //if this button clicked without any number it shoud be nan an logical error ?????
    const enteredNumber = getUserInputNum();    
    const momentResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createLogOutput("+", momentResult, enteredNumber);
}
function subtract() {
    const enteredNumber = getUserInputNum();
    const momentResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createLogOutput("-", momentResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputNum();
    const momentResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createLogOutput("*", momentResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputNum();
    const momentResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createLogOutput("/", momentResult, enteredNumber);
}

function clear() {}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
// clearbtn.addEventListener("click", clear);
