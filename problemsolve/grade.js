document.write(
  "<h1>JavaScript program which takes a score and will print the grade as the following criteria:</h1>"
);

var score = prompt("enter the score:");
if (score >= 90 && score <= 100) {
  document.write("the grade is A");
} else if (score >= 80 && score <= 99) {
  document.write("the grade is B");
} else if (score >= 70 && score <= 79) {
  document.write("the grade is C");
} else if (score >= 60 && score <= 69) {
  document.write("the grade is D");
} else {
  document.write("FAIL");
}
