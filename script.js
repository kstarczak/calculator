const screen = document.querySelector('.screen');
let a;
let b;
let operator;

(() => {
    const buttons = document.querySelectorAll(".buttons div");
    buttons.forEach((button) => {button.addEventListener('click', clickButton) 
    });
})();

const calculator = (function () {
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
    return { add, subtract, divide, multiply };
})();


function changeColor(e) {
    const colorElements  =  document.querySelectorAll('body, .container, .buttons, .screen, #equals, #clear');
    if (e.target.dataset.color === 'light') {
        colorElements.forEach((element) => element.classList.add('dark'));
        e.target.dataset.color = 'dark';
        e.target.textContent = 'Light Mode';
    } else {
        colorElements.forEach((element) => element.classList.remove('dark'));
        e.target.dataset.color = 'light';
        e.target.textContent = 'Dark Mode';
    }
}


function clickButton(e) {
    if (e.target.id === 'color') {
       changeColor(e);
        return;
    } else if (e.target.id === 'clear') {
        clearAll();
        screen.textContent = '';
    } else if (e.target.id === 'equals') {
        if (b === '.') {
            clearAll();
            screen.textContent = "ERROR: no value entered"
        }    
        else if (a && b && operator) {
            a = parseFloat(a);
            b = parseFloat(b);
            operate();
            a = screen.textContent;
        }
    } else if (e.target.className === 'operation') {
        if (!a||a==='.') {
            clearAll();
            screen.textContent = "ERROR: no value entered";
        } else if (!b) {
            operator = e.target.id;
            screen.textContent = a + operator;
        } else {
            a = parseFloat(a);
            b = parseFloat(b);
            operate();
            operator = e.target.id;
            a = screen.textContent;
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
            screen.textContent = a + operator + b;
        } else {
            b += e.target.id;
            screen.textContent = a + operator + b;
        }
    }
}


function clearAll() {
    a = null;
    b = null;
    operator = null;
}

function roundToThree(num) {
    return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function operate() {
    let result;
    let modifiedResult;
    switch (operator) {
        case '+':
            result = calculator.add(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '-':
            result = calculator.subtract(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '*':
            result = calculator.multiply(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        case '/':
            result = calculator.divide(a, b);
            modifiedResult = roundToThree(result).toString();
            screen.textContent = modifiedResult;
            clearAll();
            break;
        default:
            screen.textContent = "UKNOWN ERROR";
            clearAll();
    }

}