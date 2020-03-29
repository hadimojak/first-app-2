const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //literal for store log of oprator

function getUserInputNum() {//get input from input field in html
    if (parseInt(userInput.value)) {
        return parseInt(userInput.value);
    }
    return 0; 
}

//create caculation log and show input numer in calnumber
function createLogOutput(oprator, resultBeforeCal, calNumber) {
    const currentCalculation = `${resultBeforeCal} ${oprator} ${calNumber}`;
    outputResult(currentResult, currentCalculation);
}

function writeToLog(oprator, prevresult, numbered, calresult) {
    const logEntry = {
        opration: oprator, //make an object from the
        prevResult: prevresult, //last seen result
        number: numbered, //entered number
        result: calresult //new genereated result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    //if this button clicked without any number it_
    //_shoud be nan an logical error ?????
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult += enteredNumber;
    createLogOutput("+", beforeResult, enteredNumber);
    writeToLog("ADD", beforeResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult -= enteredNumber;
    createLogOutput("-", beforeResult, enteredNumber);
    writeToLog("SUBTRACT", beforeResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult *= enteredNumber;
    createLogOutput("*", beforeResult, enteredNumber);
    writeToLog("MULTIPLY", beforeResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInputNum();
    const beforeResult = currentResult;
    currentResult /= enteredNumber;
    createLogOutput("/", beforeResult, enteredNumber);
    writeToLog("DIVIDE", beforeResult, enteredNumber, currentResult);
}

function clear() {}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
