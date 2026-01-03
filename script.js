function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    
    if(display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}