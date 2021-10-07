readlinesync = require ("readline-sync");
score = 0
var userAnswer = readlinesync.question("What is your name? ")
console.log("Welcome " + userAnswer + ", Do you know Aman?")

function qe(question, answer) {
  var useranswer = readlinesync.question(question)
  if (useranswer === answer) {
    console.log("Right!")
    score = (score + 1)
  } else {
    console.log("Wrong")
  }
  console.log("Current score: " + score)
  console.log("-----------------")
}
qe("Where do I live? ", "Rewari");
qe("My favorite superhero would be? ", "Captain America");
qe("What is my favorite dish? ", "Rajma");
qe("Do I like Pickel? ", "No");
qe("What is my pick: DC or Marvel? ", "Marvel")
console.log("Yay! You scored ", + score);
