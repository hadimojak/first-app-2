const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //literal for store log of oprator

function getUserInputNum() {
    return parseInt(userInput.value);
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
        result: calresult, //new genereated result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculation(calculationType) {
    const enteredNumber = getUserInputNum();
    if (!enteredNumber) {
        //check the number is valid or not
        return;
    }
    const beforeResult = currentResult;
    let mathOprator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOprator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOprator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOprator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOprator = "/";
    }
    createLogOutput(mathOprator, beforeResult, enteredNumber);
    writeToLog(calculationType, beforeResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", () => calculation("ADD"));
subtractBtn.addEventListener("click", () => calculation("SUBTRACT"));
multiplyBtn.addEventListener("click", () => calculation("MULTIPLY"));
divideBtn.addEventListener("click", () => calculation("DIVIDE"));
