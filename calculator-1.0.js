let firstNumber = '';
let secondNumber = '';
let operator = undefined;
let arrayOfOperators = ['+','-','/','x'];

const numberButtons = document.querySelectorAll(".number_Button");
const operatorButtons = document.querySelectorAll(".operator_Button");
const resultDisplay = document.getElementById("result");

const addition = (numb1, numb2) => {
    return numb1 + numb2
}
const subtraction = (numb1, numb2) => {
    return numb1 - numb2
}
const multiplication = (numb1, numb2) => {
    return numb1 * numb2
}
const division = (numb1, numb2) => {
    if(numb1 === 0 || numb2 === 0){
        alert('Nice try dork, now try dividing with a number other than zero this time smh');
        return ''
    }
    else{
        return numb1 / numb2;
    }
};

const getCalculation = (operator, numb1, numb2) => {
    switch(operator) {
        case '+':
            return addition(numb1, numb2);
        case '-':
          return subtraction(numb1, numb2);
        case 'x':
            return multiplication(numb1, numb2);
        case '/':
            return division(numb1, numb2);
        default:
            return 0;
    }
}

numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const number = button.id;
        if(operator === undefined){
            firstNumber += number;
        } 
        else{
            secondNumber = number;
        }
        updateDisplay();
    });
});

operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const value = button.id
        if(value === '='){
            if(firstNumber !== '' && secondNumber !== '' && operator !== undefined){
                firstNumber = parseInt(firstNumber);
                secondNumber = parseInt(secondNumber);
                const result = getCalculation(operator,firstNumber,secondNumber);
                resultDisplay.textContent = result;
                firstNumber = result;
                secondNumber = '';
                operator = undefined;
            }
        }
        else if(value === 'clear'){
            firstNumber = '';
            secondNumber = '';
            operator = undefined;
            resultDisplay.textContent = '';
        }
        else if(arrayOfOperators.includes(value)){
            operator = value;
        }
    });
})

function updateDisplay(){
    if(firstNumber !== '' && secondNumber !== '' && operator !== undefined){
        resultDisplay.textContent = firstNumber + operator + secondNumber;
    }
    else if(firstNumber !== ''){
        resultDisplay.textContent = firstNumber;
    }
}