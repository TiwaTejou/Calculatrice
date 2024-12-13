let currentInput: string = '';
let operation: string | null = null;
let previousInput: string | null = null;

function appendNumber(number: string) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op: string) {
    if (currentInput === '') return;
    if (previousInput !== null) {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}
function clearDisplay() {
    currentInput = '';
    previousInput = null;
    operation = null;
    updateDisplay();
}

// script.ts
let display = document.getElementById('display') as HTMLInputElement;
let currentInput = '';

function appendNumber(number: string) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation: string) {
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

// script.ts
let display = document.getElementById('display') as HTMLInputElement;
let currentInput = '';

function appendNumber(number: string) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation: string) {
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        alert('Erreur de calcul');
    }
}
