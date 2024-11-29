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

function calculateResult() {
    let result: number;
    const prev = parseFloat(previousInput!);
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
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = currentInput;
}