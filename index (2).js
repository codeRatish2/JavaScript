var readlineSync = require("readline-sync")
var score = 0;
function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer === answer) {
    console.log("you were right!")
    score = score + 1;
  } else {
    console.log("you are wrong!")
    score = score - 1;
  }
}
// calling function
play("where I do Work? ", "workster")
play("where I do leave? ", "pune")
console.log("your score is , score")