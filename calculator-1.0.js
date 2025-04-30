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