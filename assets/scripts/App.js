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

function calcuclate(operation) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let operator;

    switch(operation) {
        case 'ADD':
            operator = '+';
            currentResult += enteredNumber;
            break;
        case 'SUBTRACT':
            operator = '-';
            currentResult -= enteredNumber;
            break;
        case 'MULTIPLY':
            operator = '*';
            currentResult *= enteredNumber;
            break;
        case 'DIVIDE':
            operator = '/';
            currentResult /= enteredNumber;
            break;
        default:
            return;
    }


    writeOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', calcuclate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calcuclate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calcuclate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calcuclate.bind(this, 'DIVIDE'));