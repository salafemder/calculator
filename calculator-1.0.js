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

const operate = (operator, numb1, numb2) => {
    switch(operator) {
        case 'add':
            return addition(numb1, numb2);
        case 'subtract':
          return subtraction(numb1, numb2);
        case 'multiply':
            return multiplication(numb1, numb2);
        case 'divide':
            return division(numb1, numb2);
        default:
            return 0;
    }
}


let firstNumb = undefined;
let secondNumb = undefined;
let operator = undefined;

const btns = document.querySelector('.buttonContainer');
    btns.addEventListener('click', (event) => {
        let calcInput = event.target.textContent
        let calcDisplay = document.querySelector('.display')
        calcDisplay.textContent = calcInput
    });
    

    //display text content should allow for more numbers to be concated to it
    //if user presses operator sign, firstNumb variable to store display content
    //operator variable to store pressed operator sign when firstNumb is stored
    //repeat above steps, storing in secondNumb when = sign is pressed
    //return appropriate function with value converted to string data type
    //slay???