// document.write("<h1>Check the number is positive,negative or zero</h1>");
// var n = prompt("Enter the number:");
// if (n < 0) {
//   document.write(n, "is negative number.<br>");
//   console.log(n, "is negative number.<br>");
// } else if (n > 0) {
//   document.write(n, " is positive number.<br>");
//   console.log(n, "is positive number.<br>");
// } else {
//   document.write(n, " is zero.");
//   console.log(n, " is zero");
// }

document.write("<h1>count how many are positive ,negative or zero</h1>");
var data = [4, 4, -4, -1, 0, -8, 0, 45, 9, 79];
var pos = 0,
  neg = 0,
  zero = 0,
  sum = 0;
for (i = 0; i < data.length; i++) {
  if (data[i] < 0) {
    neg++;
  }
}
for (i = 0; i < data.length; i++) {
  if (data[i] > 0) {
    pos++;
  }
}
for (i = 0; i < data.length; i++) {
  if (data[i] == 0) {
    zero++;
  }
}
for (i = 0; i < data.length; i++) {
  sum = sum + i;
}
document.write(data);
document.write("<br>");
document.write("total positive num is: ", pos);
document.write("<br>");
document.write("total negtive num is:", neg);
document.write("<br>");
document.write("total zero is:", zero);
document.write("<br>");
document.write("total sum is:", sum);

document.write("<br>");
document.write("<br>");
