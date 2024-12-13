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
function clearDisplay() {
    currentInput = '';
    previousInput = null;
    operation = null;
    updateDisplay();
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
        case 'sinus':
            result = Math.sin(toRadians(curr));
            break;
        case 'cosinus':
            result = Math.cos(toRadians(curr));
            break;
        case 'tangente':
            result = Math.tan(toRadians(curr));
            break;
        case 'modulo':
            result = prev % curr;
            break;
        case 'exponentiel':
            result = Math.exp(curr);
            break;
        case 'factoriel':
            result = factorial(prev); // Utilise le nombre précédent pour le factoriel
            break;
        case 'conversionB':
            result = parseInt(currentInput, 10).toString(2);
            break;
        case 'conversionH':
            result = parseInt(currentInput, 10).toString(16);
            break;
        case 'conversionD':
            result = parseInt(currentInput, 2);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = null;
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById('display');
    display.value = currentInput || '0'; // Affiche "0" si currentInput est vide
}
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function showTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    currentInput = timeString;
    updateDisplay();
}
function factorial(num) {
    if (num < 0)
        return NaN; // Le factoriel n'est pas défini pour les nombres négatifs
    if (num === 0 || num === 1)
        return 1;
    return num * factorial(num - 1);
}
