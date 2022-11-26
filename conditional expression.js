let a = prompt("Hey whats Your Age?");
// converting to a number
a = Number.parseInt(a);
if (a < 0) {
  alert("This is invaild Age!")
}
else if (a < 9) {
  alert("You are kid you cannot even think of driving")

}
else if (a < 18 && a < 9) {
  alert("You are kid you can thik of driving after 18")
}
else {
  alert("You can now drive as you above 18")
}
console.log("Done")