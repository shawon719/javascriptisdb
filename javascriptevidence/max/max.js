let a = parseInt(prompt("Enter the value of first number(a):"));
let b = parseInt(prompt("Enter the value of second number(b):"));
let c = parseInt(prompt("Enter the value of third number(c):"));
let maxnum;

if (a > b && a > c) {
  maxnum = a;
  document.write("Maximum number is: " + maxnum);
} else if (b > a && b > c) {
  maxnum = b;
  document.write("Maximum number is: " + maxnum);
} else {
  maxnum = c;
  document.write("Maximum number is: " + maxnum);
}
