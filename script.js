// variables
let storedNum;

let displayValue = '';
let currentOperation = '';
let displayShouldClear = false;

const display = document.querySelector('.display');
display.textContent = '0';
// show 0 in display when calc launches
// if number on display is 0 remove it and add append numbers
// 
// change stored number without changing the displayed number
// store variable to check if display should be cleared
// if display should be cleared
//  clear display when
//      the last button pressed was an operation

document.addEventListener('click', function (e) {
    if (displayShouldClear) {
        clearDisplay();
        displayShouldClear = false;
    }
    if (e.target.tagName.toLowerCase() === 'button') {
        const buttonVal = e.target.textContent;
        const currentValue = parseFloat(displayValue);
        if (buttonVal === 'C') {
            storedNum = null;
            currentOperation = '';
            clearDisplay();
            return;
        }
        if (buttonVal === '.' && !display.textContent.includes('.')) {
            displayValue += buttonVal;
            display.textContent = displayValue;
            return;
        }
        if (buttonVal >= '0' && buttonVal <= '9') {
            if (display.textContent === '0') {
                display.textContent = '';
                displayValue = '';
            }

            displayValue += buttonVal;
            display.textContent = displayValue;

            displayShouldClear = false;
            return;

        }

        if (buttonVal == '=') {

            if (currentOperation) {

                displayValue = operate(storedNum, currentOperation, currentValue);
                storedNum = displayValue;

                display.textContent = displayValue;
                if (display.textContent == 'Infinity') {
                    display.textContent = 'Error. Did you divide by zero?';
                }
                displayShouldClear = true;

            }

            return;
        }
        if ('+-x÷'.includes(buttonVal)) {
            if (currentOperation) {
                displayValue = operate(storedNum, currentOperation, currentValue);
            }

            storedNum = parseFloat(displayValue);
            currentOperation = buttonVal;
            displayShouldClear = true;

        }




    }

});

function clearDisplay() {
    display.textContent = '0';
    displayValue = '0';
}
function operate(a, operation, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

// operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;

}

function divide(a, b) {
    return a / b;

}