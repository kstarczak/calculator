const buttons = document.querySelectorAll(".buttons div");
const screen = document.querySelector('.screen');
screen.textContent = 'Hello World';

let a;
let b;
let operator;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}


function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


buttons.forEach((button) => {button.addEventListener('click', clickButton)});

function clickButton(e) {
    //dark mode toggle
    if (e.target.id === 'clear') {
        clearAll();
        screen.textContent = '';
    } else if (e.target.id === 'equals') {
        if (a && b && operator) {
            a = parseFloat(a);
            b = parseFloat(b);
            operate(a, b, operator);
            a = screen.textContent;
        }
    } else if (e.target.className === 'operation') {
        if (!a) {
            clearAll();
            screen.textContent = "ERROR: no value entered";
        } else {
            operator = e.target.id;
            screen.textContent = a + operator;
        }
    } else {
        if (!a) {
            a = e.target.id;
            screen.textContent = a;
        } else if (!operator) {
            a += e.target.id;
            screen.textContent = a;
        } else if (!b) {
            b = e.target.id;
            screen.textContent = a+operator+b;
        } else {
            b += e.target.id;
            screen.textContent = a+operator+b;
        };
    };
};
        
function clearAll() {
    a = null;
    b = null;
    operator = null;
}

function roundToThree(num) {
   return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function operate(a, b, operator) {
    console.log(a);
    console.log(b);
    console.log(operator);
    let result;
    let modifiedResult;
    switch (operator) {
        case '+':
            result = add(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '-':
            result = subtract(a, b).toString();
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '*':
            result = multiply(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '/':
            result = divide(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        default:
            screen.textContent = "UKNOWN ERROR";
            clearAll();
    }
    
}


/* onclick store the input as variable 'a'
and  store the button class as 'operator'
add class list to a button

on click equal let the operator and b return to nul
and let A show up on the screen and assign the return value to a 
*/