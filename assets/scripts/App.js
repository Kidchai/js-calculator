let currentResult = 0;

currentResult += 10;

// Gets input from input field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generates and writes calcuclation log
function writeOutput(operator, resultBeforeCalc, enteredNumber) {
    const description = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
    outputResult(currentResult, description); // from vendor file
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/ ', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);