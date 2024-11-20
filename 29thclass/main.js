//document.write("<h1>Prime number</h1>");
// var n = prompt("ENter a number:");
// var count = 0;
// if (n == 0 || n == 1) {
//   document.write("not prime or composite.");
// } else {
//   for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//       count++;
//       break;
//     }
//   }
//   if (count == 0) {
//     document.write("prime number.");
//   } else {
//     document.write("not prime.");
//   }
// }

document.write("prime another way");
var num = prompt("enter a number:");
var isprime = true;
if (num === 1) {
  document.write("1 is not prime or composite.");
  //break;
} else if (num > 1) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    document.write("prime");
  } else {
    document.write("not prime");
  }
} else {
  document.write("num is less than 1.so not prime or composite");
}
