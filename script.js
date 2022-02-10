const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
const euqalsKey = document.querySelector('.equals-key');

currentOperand.textContent = '0';
previousOperand.textContent = '-';


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


let storedNumber = '';
let engagedOperator = '';
let firstNumber = '';
let result = '';


numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    });
});


function clearSection() {
    currentOperand.textContent = '0';
    previousOperand.textContent = '0';
    storedNumber = '';
    result = ''; 
    firstNumber = '';

}

function backspace() {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    if (currentOperand.textContent == '') {
        currentOperand.textContent = '0';
    }
    storedNumber = '';
}



function operate(num1,  num2, operator) {
    
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
};

operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {
        if (firstNumber && storedNumber) {
            displayResult();
        }

        firstNumber = storedNumber;

        engagedOperator = operator.textContent;
        previousOperand.textContent = firstNumber + engagedOperator;
        storedNumber = '';

    });
}));



euqalsKey.addEventListener('click', function () {
    displayResult();
});



function displayResult() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), engagedOperator);

    currentOperand.textContent = result;
    previousOperand.textContent = `${firstNumber} ${engagedOperator} ${storedNumber}`;
    storedNumber = result;

    return result;
}
                
                
deleteButton.addEventListener('click', backspace);
clearButton.addEventListener('click', clearSection);