var num = 50;
if (num < 25) {
  document.write("fail");
  console.log("fail");
} else {
  document.write("pass");
  console.log("pass");
}

document.write("<br>");

var a = 20;

if (a == 10) {
  document.write("a  isnt equal to 10" + " " + "a is bigger  than 20");
  console.log("a  isnt equal to 10" + "." + "a is bigger than 20");
} else if (a == 20) {
  document.write("a is equal to 20");

  console.log("a  is equal to 20");
} else if (a == 30) {
  document.write("a isn't equal to 30" + "." + "a is less than 30");
  console.log("a  isnt equal to 30" + "." + "a is less than 30");
} else if (a == 40) {
  document.write("a isn't equal to 40" + "." + "a is less than 40");
  console.log("a  isn't equal to 40" + "." + "a is less than 40");
} else {
  document.write("a isn't equal to 50" + "." + "a is less than 50");
  console.log("a  isnt equal to 50" + "." + "a is less than 50");
}

document.write("<br>");
var a = prompt("Please enter your Name:", "");
var b = a.toLowerCase();

if (b == "sharmony") {
  document.write("This is Name");
} else if (b == "batch") {
  document.write("this is batch");
} else if (b == "php") {
  document.write("this is subject");
} else {
  document.write("not done");
}
