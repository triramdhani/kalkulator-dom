





// function for calc
const calc = (firstNumber, secondNumber , operation) => {
    let result 

    switch (operation) {
        case '+':   
            result = firstNumber + secondNumber
            break;
        case '-':
            result = firstNumber - secondNumber
            break
        case '*':
            result = firstNumber * secondNumber
            break
        case '/':
            // need validation
            result = firstNumber / secondNumber
        default:
            break;
    }
    return result
}
