var currentInput = '';
var operation = null;
var previousInput = null;
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
function setOperation(op) {
    if (currentInput === '')
        return;
    if (previousInput !== null) {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}
function calculateResult() {
    var result;
    var prev = parseFloat(previousInput);
    var curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr))
        return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = null;
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    previousInput = null;
    operation = null;
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById('display');
    display.value = currentInput;
}
