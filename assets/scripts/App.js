let currentResult = 0;
let logEntries = [];

// Gets input from input field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generates and writes calcuclation log
function writeOutput(operator, resultBeforeCalc, enteredNumber) {
    const description = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
    outputResult(currentResult, description); // from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: currentResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/ ', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);