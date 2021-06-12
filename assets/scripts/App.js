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
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calcuclateResult(operation) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        operator = '+';
        currentResult += enteredNumber;
    } else if (operation === 'SUBTRACT') {
        operator = '-';
        currentResult -= enteredNumber;
    } else if (operation === 'MULTIPLY') {
        operator = '*';
        currentResult *= enteredNumber;
    } else if (operation === 'DIVIDE') {
        if (!enteredNumber)
            return;
        operator = '/';
        currentResult /= enteredNumber;
    } else {
        return;
    }

    writeOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);

}

function add() {
    calcuclateResult('ADD');
}

function subtract() {
    calcuclateResult('SUBTRACT');
}

function multiply() {
    calcuclateResult('MULTIPLY');
}

function divide() {
    calcuclateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);