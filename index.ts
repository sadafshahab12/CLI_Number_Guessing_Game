#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Guess the number among 1 to 10:",
  },
]);

if (answer.userGuessNumber === randomNumber) {
  console.log("Hurrah! You Guessed the right number");
} else {
  console.log("Guess Wrong, Game End!");
}

