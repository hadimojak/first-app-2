const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //literal for store log of oprator

function getUserInputNum() {
    if (parseInt(userInput.value)) {
        return parseInt(userInput.value);
    }
    return "enter first num"; //get input from input field in html
}

//create caculation log and show input numer in calnumber
function createLogOutput(oprator, resultBeforeCal, calNumber) {
    const currentCalculation = `${resultBeforeCal} ${oprator} ${calNumber}`;
    outputResult(currentResult, currentCalculation);
}

function add() {
    //if this button clicked without any number it_
    //_shoud be nan an logical error ?????
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult += enteredNumber;
    createLogOutput("+", beforeResult, enteredNumber);
    const logEntry = {
        opration: "ADD",     //make an object from the 
        prevResult: beforeResult,//last seen result
        number: enteredNumber,//entered number
        result: currentResult//new genereated result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult -= enteredNumber;
    createLogOutput("-", beforeResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult *= enteredNumber;
    createLogOutput("*", beforeResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult /= enteredNumber;
    createLogOutput("/", beforeResult, enteredNumber);
}

function clear() {}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
