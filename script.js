// create variable for calculator Operation
    const operation = {
        plus : "+",
        minus : "-",
        devide : "/",
        multiple : "*",
    }

// get all the button dom
let resetButton = document.querySelector('#resetBtn')

let plusButton = document.querySelector('#plusBtn')
let minusButton = document.querySelector('#minusBtn')
let multipleButton = document.querySelector('#multipleBtn')
let divideButton = document.querySelector('#divideBtn')

// add event listener for button
plusButton.addEventListener('click', ()=> {
    renderResult(operation.plus)
})
minusButton.addEventListener('click', ()=>{
   renderResult(operation.minus)
})
multipleButton.addEventListener('click', () => {
    renderResult(operation.multiple)
})
divideButton.addEventListener('click', ()=> {
    renderResult(operation.devide)
})
resetButton.addEventListener('click', ()=> {
    resetInputFields()
})


// funtion for reset input fields
function resetInputFields( ){
    document.getElementById('firstInput').value = ''
    document.getElementById('secondInput').value = ''
    document.getElementById('resultCalculator').innerHTML = ''
    resetOperationSignColor()
}

function resetOperationSignColor(){
    document.querySelector('#plus').style.color = 'wheat'
    document.querySelector('#minus').style.color = 'wheat'
    document.querySelector('#multiple').style.color = 'wheat'
    document.querySelector('#divide').style.color = 'wheat'
}

// callback function for calc operation
function renderResult(calcOperation){
    const firstNumber = document.getElementById('firstInput').value
    const secondNumber = document.getElementById('secondInput').value

    if(firstNumber === '' || secondNumber === ''){
       return alert('input fieds required')
    }
    let hasil = calc(firstNumber,secondNumber, calcOperation)
    console.log(hasil)
    
    // render result to HTML
    let targetElement = document.querySelector('#resultCalculator')
    if(hasil === undefined){
        targetElement.innerHTML = ''
    }else {
        targetElement.innerHTML = hasil
    }

    // reset color sign
    resetOperationSignColor()
    if (calcOperation === operation.plus) {
        document.querySelector('#plus').style.color = 'blue'
    } else if(calcOperation === operation.minus){
        document.querySelector('#minus').style.color = 'blue'
    } else if(calcOperation === operation.multiple){
        document.querySelector('#multiple').style.color = 'blue'
    }else if(calcOperation === operation.devide){
        document.querySelector('#divide').style.color = 'blue'
    }
}

// function for calcculate
function calc(firstNumber, secondNumber , operation)  {
    let result 
    const aNumber = parseInt(firstNumber)
    const bNumber = parseInt(secondNumber)
    switch (operation) {
        case '+':   
            result = aNumber + bNumber
            break;
        case '-':
            result = aNumber - bNumber
            break
        case '*':
            result = aNumber * bNumber
            break
        case '/':
            // need validatiooif()
            if(aNumber === 0 && bNumber === 0){
                return alert('upsss operation cannot executed')
            }else{

                result = aNumber / bNumber
            }
        default:
            break;
    }

    return result // decimal 6
}
