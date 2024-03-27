import inquirer from 'inquirer';
const calculator = await inquirer.prompt([
    {
        message: 'Enter first number:',
        type: 'number',
        name: 'num1',
    },
    {
        message: 'Enter second number:',
        type: 'number',
        name: 'num2',
    },
    {
        message: 'Select operation:',
        type: 'list',
        name: 'operation',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
let result = 0;
if (calculator.operation === 'Addition') {
    result = calculator.num1 + calculator.num2;
}
else if (calculator.operation === 'Subtraction') {
    result = calculator.num1 - calculator.num2;
}
else if (calculator.operation === 'Multiplication') {
    result = calculator.num1 * calculator.num2;
}
else if (calculator.operation === 'Division') {
    if (calculator.num2 !== 0) {
        result = calculator.num1 / calculator.num2;
    }
    else {
        console.log("Error: Division by zero");
    }
}
console.log(`Result: ${result}`);
