document.write("<h1>prime number</h1>");

var p = prompt("Enter the value of p:");
var count = 0;
if (p == 0 || p == 1) {
  document.write("the number is not prime or composite:", p);
} else {
  for (i = 2; i < p; i++) {
    if (p % i == 0) {
      count++;
      break;
      //continue;
    }
  }
  if (count > 0) {
    document.write("not prime:", p);
  } else {
    document.write("prime:", p);
  }
}

document.write("<br>");
document.write("<h1>max number</h1>");
var a = prompt("enter a num:");
var b = prompt("enter b num:");
var c = prompt("enter c num:");
var max;
if (a > b && a > c) {
  max = a;
  document.write("max number is:", max);
} else if (b > a && b > c) {
  max = b;
  document.write("max number:", max);
} else {
  max = c;
  document.write("max number:", max);
}

document.write("<br>");
document.write("<h1>grade</h1>");

var marks=prompt("enter marks:");


