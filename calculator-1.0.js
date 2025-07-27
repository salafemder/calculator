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
    return numb1 / numb2
}

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


let firstNumb = undefined;
let secondNumb = undefined;
let operator = undefined;
let arrayOfOperators = ['+','-','x','/'];

const btns = document.querySelector('.buttonContainer');
    btns.addEventListener('click', (event) => {
        let calcInput = event.target.textContent;
        let calcDisplay = document.querySelector('.display');
        let equalSign = document.querySelector('.smallButEqual');
        if (arrayOfOperators.includes(calcInput)){
            operator = calcInput;
        }
        calcDisplay.textContent == operator ? calcDisplay.textContent = calcInput : calcDisplay.textContent += calcInput;
        if (calcDisplay.textContent.includes(operator) && firstNumb === undefined){
            firstNumb = parseInt(calcDisplay.textContent);     
            return calcDisplay.textContent = calcInput;    
        }
        else if (calcDisplay.textContent.includes(equalSign.textContent) && firstNumb !== undefined){
            secondNumb = parseInt(calcDisplay.textContent.slice(0, -1));
            return calcDisplay.textContent = (getCalculation(operator, firstNumb, secondNumb))
     }
    });
    
    //display text content should allow for more numbers to be concated to it (done)
    //if user presses operator sign, firstNumb variable to store display content (done)
    //operator variable to store pressed operator sign when firstNumb is stored (done)
    //repeat above steps, storing in secondNumb when = sign is pressed
    //return appropriate function with value converted to string data type
    //slay???