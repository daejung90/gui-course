const prompt = require ("prompt-sync")();

console.log("The Ultra calculator!🧮 \n")

let operation = prompt("Choose an operation (+) (-) (*) (/) ---> ") 
let num1 = prompt("Type your first number ---> ");
let num2 = prompt("Type your second number ---> ");

val1 = parseInt(num1);
val2 = parseInt(num2);


function calculator () {

    if(operation === "+") {
        return val1 + val2;
    } else if (operation === "-") {
        return val1 - val2;
    } else if (operation === "*") {
        return val1 * val2;
    } else if (operation === "/") {
        return val1 / val2;
    }
};

console.log("The result is " + calculator(operation, num1, num2));