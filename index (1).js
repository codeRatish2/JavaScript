const { log } = require("console");
var readlinesync = require("readline-sync");
function add(numberOne, numberTwo) {
  var sum = numberOne + numberTwo;
  return sum;
}



var result = add(2, 5);
console.log("the sum of 2 and 5 is" + result)