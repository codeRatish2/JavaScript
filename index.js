var readlinesync = require("readline-sync");
var score = 0;
var questionone = "Am I older than 25 ?"
var answerone = "yes"
// input
var userAnswer = readlinesync.question(questionone);

// processing
console.log("you entered"  +  userAnswer)
// ouput
if (userAnswer === answerone) {
  console.log("you are right")
  score = score + 1;
  console.log("score is" + score)

}
else {
  console.log("you are wrong")
  score = score - 1;
  console.log("score is" + score)
}



var questiontwo = "Am I city from Mumbai ?"
var answertwo = "no"
// input
var userAnswer = readlinesync.question(questiontwo);

// processing
console.log("you entered" + userAnswer)
// ouput
if ("userAnswer===answertwo") {
  console.log("you are right")
  score = score + 1;
  console.log("score is" + score)

}
else {
  console.log("you are wrong")
  score = score - 1;
  console.log("score is" + score)


}