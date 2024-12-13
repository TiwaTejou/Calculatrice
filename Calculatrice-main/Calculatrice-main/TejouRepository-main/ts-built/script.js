let currentInput = '';
let operation = null;
let previousInput = null;
const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== null) {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (operation === null || previousInput === null) return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

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
    display.value = currentInput;
}

function calculateTrigonometry(func) {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    let result;
    switch (func) {
        case 'cos':
            result = Math.cos(value);
            break;
        case 'sin':
            result = Math.sin(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    updateDisplay();
}

function calculatePower() {
    const values = currentInput.split(' ');
    if (values.length !== 2) return;

    const base = parseFloat(values[0]);
    const exponent = parseFloat(values[1]);
    if (isNaN(base) || isNaN(exponent)) return;

    currentInput = Math.pow(base, exponent).toString();
    updateDisplay();
}

function calculateFactorial() {
    const value = parseInt(currentInput);
    if (isNaN(value)) return;

    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }

    currentInput = result.toString();
    updateDisplay();
}

function calculateSquareRoot() {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    currentInput = Math.sqrt(value).toString();
    updateDisplay();
}

function convertBase(base) {
    const value = parseInt(currentInput);
    if (isNaN(value)) return;

    switch (base) {
        case '2':
            currentInput = value.toString(2);
            break;
        case '16':
            currentInput = value.toString(16);
            break;
        case '10':
        default:
            currentInput = value.toString(10);
            break;
    }
    updateDisplay();
}

function calculateExponential() {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    currentInput = Math.exp(value).toString();
    updateDisplay();
}

function calculateLogarithm() {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    currentInput = Math.log(value).toString();
    updateDisplay();
}

function calculateModulo() {
    const values = currentInput.split(' ');
    if (values.length !== 2) return;

    const num1 = parseFloat(values[0]);
    const num2 = parseFloat(values[1]);
    if (isNaN(num1) || isNaN(num2)) return;

    currentInput = (num1 % num2).toString();
    updateDisplay();
}

function showCurrentTime() {
    const now = new Date();
    currentInput = now.toLocaleTimeString();
    updateDisplay();
}
