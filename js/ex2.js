function calculator(number1, number2, operation) {
    let result;

    if (operation === "+") {
        result = number1 + number2;
    } else if (operation === "-") {
        result = number1 - number2;
    } else if (operation === "*") {
        result = number1 * number2;
    } else if (operation === "/") {
        result = number1 / number2;
    }

    return `${number1} ${operation} ${number2} = ${result}`;
}

const number1 = Number(prompt("Enter the first number:"));
const number2 = Number(prompt("Enter the second number:"));
const operation = prompt("Enter a mathematical operation (+, -, *, /):");

const answer = calculator(number1, number2, operation);

console.log(answer);