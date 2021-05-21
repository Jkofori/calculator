let firstNumber='0';
let secondNumber=undefined; // secondNumber is undefined when first number is being typed

let operator=''; // to remember when operators are pressed
let decimalIsPresentFirstNumber=false; // 1st number has decimal when true
let decimalIsPresentSecondNumber=false; // 2nd number has decimal when true

//calculator functions below
function add(x,y){
    let output=parseFloat(x)+parseFloat(y);
    return +output.toFixed(5);
}

function subtract(x,y){
    let output=x-y;
    return +output.toFixed(5);
}

function multiply(x,y){
    let output=x*y;
    return +output.toFixed(5);
}
function divide(x,y){
    if(y==0){
        return 'ERROR';
    } else {
        let output=x/y;
        return +output.toFixed(5);
    }
}

function operate(operator,x,y){
    if(operator=='add'){
        firstNumber=add(x,y);
        return firstNumber;
    } else if(operator=='subtract'){
        firstNumber=subtract(x,y);
        return firstNumber;
    } else if(operator=='multiply'){
        firstNumber=multiply(x,y);
        return firstNumber;
    } else if(operator=='divide'){
        firstNumber=divide(x,y);
        return firstNumber;
    }
}

function allClear(){
    firstNumber=0;
    secondNumber=undefined;
    operator='';
    displayValue.textContent='0';
    decimalIsPresentFirstNumber=false;
    decimalIsPresentSecondNumber=false;
}
//calculator functions above

// for manipulating calculator display
let displayValue = document.getElementById('displayValue');

// for button number event listeners
let numberArray = [...document.getElementsByClassName('numberButton')]

// add event listeners to all numbers, changing the display value as buttons are pressed
numberArray.forEach(element => {
    element.addEventListener('click', function(){
        
        // instances for the first number
        if(decimalIsPresentFirstNumber==true && secondNumber==undefined && operator==''){ // a digit of 1st number is placed after decimal
            firstNumber+=element.textContent;
            displayValue.textContent=firstNumber;
        } else if(firstNumber=='0' && secondNumber==undefined && operator==''){ // 1st digit of 1st number replaces the zero on display
            firstNumber=element.textContent;
            displayValue.textContent=firstNumber;
        } else if(decimalIsPresentFirstNumber==false && secondNumber==undefined && operator==''){ // next digit in 1st integer is placed
            firstNumber+=element.textContent;
            displayValue.textContent=firstNumber;
        }
        
        // instances for the second number
        if(secondNumber=='0.' && operator!=''){ // a digit of 2nd number is placed after a zero with decimal
            secondNumber+=element.textContent;
            displayValue.textContent=secondNumber;
        } else if(decimalIsPresentSecondNumber==false && secondNumber==undefined && operator!=''){ // 1st digit of 2nd integer displays on screen
            secondNumber=element.textContent;
            displayValue.textContent=secondNumber;
        } else if(operator!='' && displayValue.textContent==secondNumber){ // if operator is pressed and second number exists
            secondNumber+=element.textContent;
            displayValue.textContent=secondNumber;
        }

    });
});

// for operator button event listeners
let operatorArray = [...document.getElementsByClassName('operatorButton')];

// define operator value after an operator is clicked
operatorArray.forEach(element => {
        //if 2nd operator is clicked after 2 numbers are defined, calculate and redefine operator
        element.addEventListener('click', function(){
            if((typeof(firstNumber)=='string') && (typeof(secondNumber)=='string')){
                firstNumber=operate(operator,firstNumber,secondNumber).toString();
                displayValue.textContent=firstNumber;
                secondNumber=undefined;
                decimalIsPresentSecondNumber=false;
                operator=element.id;
            } else {    
            operator=element.id; //if only one number is defined, define operator
            }
        });
});

// for equals button event listener
let equalsButton = document.getElementById('equals');

// only execute operate function on equal button press if operator & 2nd number is known
equalsButton.addEventListener('click', function(){
    if(operator!='' && secondNumber!=undefined){
        firstNumber=operate(operator,firstNumber,secondNumber);
        displayValue.textContent=firstNumber;
        secondNumber=undefined;
        decimalIsPresentSecondNumber=false;
        operator='';
    }
});

// for decimal button event listener
let decimalButton = document.getElementById('decimal');

// decimal is allowed to be placed based on each instance, order of if statements is crucial
decimalButton.addEventListener('click', function(){

    if(firstNumber=='0'){ // first button executed is decimal
        firstNumber='0.';                                                                     
        displayValue.textContent=firstNumber;            
        decimalIsPresentFirstNumber=true;
    } else if(decimalIsPresentFirstNumber==false && secondNumber==undefined && operator==''){ // first number being typed can add its decimal
        firstNumber+='.'
        displayValue.textContent=firstNumber;
        decimalIsPresentFirstNumber=true;
        console.log('first number being typed can add its decimal');
    } else if(secondNumber==undefined && operator!=''){ // decimal is added for 2nd number before digits
        secondNumber='0.';                                                                     
        displayValue.textContent=secondNumber;            
        decimalIsPresentSecondNumber=true;
        console.log('decimal is placed for second number before any digits')  
    } else if(secondNumber!=undefined && operator!=''){
        secondNumber+='.'
        displayValue.textContent=secondNumber;
        decimalIsPresentSecondNumber=true;
        console.log('bruh');
    }
});

// clear calculator display and all variable values
let allClearButton = document.getElementById('AC');

allClearButton.addEventListener('click', function(){
    allClear();
});


