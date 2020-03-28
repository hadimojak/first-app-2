const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNum() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserInputNum();
    const currentCalculation = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, currentCalculation);
}

addBtn.addEventListener("click", add);
