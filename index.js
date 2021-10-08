readlinesync = require("readline-sync")
const chalk = require('chalk');
var UserAnswer = readlinesync.question("What is your Name? ")
console.log("Welcome", UserAnswer, "Hope you are doing well. ")
console.log("Here is a quiz to see how well do you know me. ")
score = 0
var Answer = readlinesync.question("Are you ready? ")
 if (Answer === "yes") {
 console.log("Okay. Let's dive in. ")
 } else {
   console.log("Maybe you can try some other time. ")
 }
function abc(question, answer){
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer) {
  console.log(chalk.underline.bold.green("This is right answer. "))
  score = (score + 1)
  } else {
    console.log(chalk.underline.bold.red("This is wrong answer"))
    score = (score - 1)
  }
  console.log(chalk.yellow("Your score is ", score));
}
abc("What is my age? ", "20");
abc("Where do I live? ", "Rewari")
abc("Am I handsome? ", "No")
abc("What I always wanted to do? ", "startup")
abc("My favorite superhero is? ", "Captain America")
console.log("-------------------------------------")
console.log(chalk.magenta("Your final highscore is ", score, ". Check these below scores by people who took this quiz and send me a screenshot if you think you deserve to be there."))
let highscore = {Amu: 1, Tio: 5, Rian: 2, Namita: 4}
console.table(highscore);