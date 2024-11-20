document.write("<h1>fibonacci series</h1>");
var first = 0;
var second = 1;
var third = 0;
var n = parseInt(prompt("enter the value of n:"));
document.write(first, " ");
document.write(second, " ");

for (var i = 2; i < n; i++) {
  third = first + second;

  document.write(third, " ");

  first = second;
  second = third;
}
document.write("<br>");

// document.write("<h1>fibonacci series print 10 er ag obdi.</h1>");
// var first = 0;
// var second = 1;
// var third = 0;
// var n = prompt("enter the value of n:");
// document.write(first, " ");
// document.write(second, " ");
// for (var i = 2; i < n; i++) {
//   if (third < n - 2) {
//     third = first + second;
//     document.write(third, " ");
//  first = second;
//     second = third;
//   }
// }
// document.write("<br>");
// document.write("<h1>fibonacci series</h1>");
// var first = 0;
// var second = 1;
// var third = 0;
// var n = prompt("enter the value of n:");
// document.write(first, " ");
// document.write(second, " ");
// for (var i = 2; i < n; i++) {
//   if (i <= 1) {
//     third = i;
//   } else {
//     third = first + second;
//     document.write(third, " ");
//     first = second;
//     second = third;
//   }
// }

// document.write("<h1>factorial</h1>");
// let m = prompt("enter the value of m:");
// let fact = 1;
// if (m >= 0) {
//   for (let i = 1; i <= m; i++) {
//     fact = fact * i;
//   }
//   document.write("factorial:", fact);
// } else {
//   document.write("factorial is negative;");
// }
