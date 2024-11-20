// document.write("<h1>STUDENTS Marks</h1>");

// var getMark = prompt("Enter Your Mark");
// var totalMark = prompt("Enter Total Mark");

// var percentetMark = parseFloat(getMark / totalMark) * 100;

// if (percentetMark >= 80) {
//   document.write("A+");
//   //window.alert("A+");
// } else if (percentetMark >= 70) {
//   document.write("A");
//   //window.alert("A");
// } else if (percentetMark >= 60) {
//   document.write("-A");
//   //  window.alert("B");
// } else if (percentetMark >= 40) {
//   document.write("B");
// } else {
//   document.write("Fail");
// }

// document.write("<br>");

// var num1 = prompt("Get num1:");
// var num2 = prompt("Get num2:");
// var num1 = prompt("Get num3:");

// if (num1 > num2 && num1 > num2) {
//   document.write("max num is:", num1);
// } else if (num2 > num1 && num2 > num3) {
//   document.write("max is :", num2);
// } else {
//   document.write("max is :", num3);
// }

document.write("<h1>odd and even number</h1>");
var number = prompt("Enter the Number:");
if (number % 2 === 0) {
  document.write("THE number is even.");
  console.log("the number is even");
} else {
  document.write("THE number is odd.");
  console.log("the number is odd");
}

//else {
//   document.write("the number is odd or even.");
//   console.log("the number is not odd or even");
// }

document.write("<h1>question 04</h1>");

var data = ["Monday", "Tuesday", "Thursday", "Friday", "sunday"];
document.write(data);
document.write("<br>");
data.shift();
document.write("shift monday:", data);
document.write("<br>");
document.write("<br>");
var week = data.slice(0, 3);
document.write("slice:", week);
document.write("<br>");
document.write("<br>");

var data = ["Monday", "Tuesday", "Thursday", "Friday", "sunday"];
document.write(data);
document.write("<br>");
document.write("<br>");
data.push("Saturday");

document.write("push:", data);

document.write("<br>");
document.write("<br>");
var b = data.splice(1, 0, "january");
document.write(data);
