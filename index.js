#! /usr/bin/env node
import inquirer from "inquirer";
// 1 generate a random number
// 2 user input for guessing number
// 3 compare user input with computer generated number and show result 
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! warisha you guessed right number.");
}
else {
    console.log("try again! you guesses wrong number.");
}
