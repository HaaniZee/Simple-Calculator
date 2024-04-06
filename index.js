#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondeNumber" },
    {
        message: "select one of the operators to perfom action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statament;
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondeNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondeNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondeNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondeNumber);
}
else {
    console.log("Please select valid operator");
}
