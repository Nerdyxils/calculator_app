let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    })

    $('.clear').on('click', function(event) {
        num1 = '';
        num2 = '';
        operator = '';
        total = '';
        $('.calc-result-input').text('0')
    })
})

function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }

    displayButton(num);
}

function handleOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }
}

function displayButton(btn) {
    $('.calc-result-input').text(btn);
}



function handleTotal() {
    switch(operator) {
        case '+' : 
            total = +num1 + +num2;
                displayButton(total);
                    
            break;
        
        case '-' : 
            total = +num1 - +num2;
                displayButton(total);
                    
        break;

        case '*' : 
            total = +num1 * +num2;
                displayButton(total);
                    
        break;

        case '/' : 
            total = +num1 / +num2;
                displayButton(total);
                    
        break;

        case '%' : 
            total = +num1 % +num2;
                displayButton(total);
                    
        break;
    }
    updateVariable();
}

function updateVariable() {
    num1 = total;
    num2 = '';
}
