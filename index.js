#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const names = await inquirer.prompt([
    {
        message: chalk.magenta(`What's your name?`),
        type: "input",
        name: "name",
    },
]);
console.log(chalk.cyan(`Hi! ${names.name} wellcome to our calculator`));
const asnwer = await inquirer.prompt([
    {
        message: chalk.green("Enter first number:"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.green("Enter second number:"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.yellow("Select one of the operators to perform operation"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// Conditional statement
if (asnwer.operator === "Addition") {
    console.log(chalk.blue(`Your result is: ${asnwer.firstNumber + asnwer.secondNumber}`));
}
else if (asnwer.operator === "Substraction") {
    console.log(chalk.blue(`Your result is: ${asnwer.firstNumber - asnwer.secondNumber}`));
}
else if (asnwer.operator === "Multiplication") {
    console.log(chalk.blue(`Your result is: ${asnwer.firstNumber * asnwer.secondNumber}`));
}
else {
    // Division case with checking for division by zero error
    if (asnwer.secondNumber == 0) {
        console.log(chalk.red("Error! You can't divide by zero."));
    }
    else {
        console.log(chalk.blue(`Your result is: ${asnwer.firstNumber / asnwer.secondNumber}`));
    }
}
