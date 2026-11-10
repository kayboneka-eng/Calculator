const inpt=document.querySelector(".input");
const numbers= document.querySelectorAll(".num");
const operators= document.querySelectorAll(".Operator");
let firstNumber;
let operatr;
let secondNumber;
let startNewNumber= false;
function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
numbers.forEach((number) => {
    number.addEventListener("click",()=>{
        if (startNewNumber) {
            inpt.value = number.textContent;
            startNewNumber = false;
        } else if (inpt.value === "0") {
            inpt.value = number.textContent;
        } else {
            inpt.value += number.textContent;
        }
    });
});


operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        const symbol= operator.textContent.trim()
        if (symbol==="⌫"){
            if(!startNewNumber){
                inpt.value= inpt.value.slice(0,-1)|| "0";   
            }
            return;}
        if(symbol==="+/-"){
            inpt.value= String(Number(inpt.value)*-1);
            return;
        }
        if (symbol === "=") {
            if (firstNumber === undefined ||
                operatr === undefined ||
                startNewNumber) {
                return;
            }

            secondNumber = Number(inpt.value);

            let result;

            if (operatr === "+") {
                result = add(firstNumber, secondNumber);
            } else if (operatr === "-") {
                result = substract(firstNumber, secondNumber);
            } else if (operatr === "×") {
                result = multiply(firstNumber, secondNumber);
            } else if (operatr === "÷") {
                if (secondNumber === 0) {
                    inpt.value = "Error";
                    firstNumber = undefined;
                    operatr = undefined;
                    startNewNumber = true;
                    return;
                }
                result = divide(firstNumber, secondNumber);
            }

            inpt.value = String(result);

            firstNumber = undefined;
            operatr = undefined;
            startNewNumber = true;
            return;
        }
         if (["+", "-", "×", "÷"].includes(symbol)) {

            if (startNewNumber && operatr !== undefined) {
                operatr = symbol;
                return;
            }

            firstNumber = Number(inpt.value);
            operatr = symbol;
            startNewNumber = true;
}});
});