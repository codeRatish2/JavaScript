var readlineSync = require("readline-sync");

const number = prompt("enter a number\n");

// check even No.
if (number % 2 == 0) {
  console.log("The Number is even");
} else {
  console.log("The Number is odd");
}


