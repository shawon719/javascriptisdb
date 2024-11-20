var a = prompt("enter the value of a:");
var b = prompt("enter the value of b:");
var c = prompt("enter the value of c:");
var temp;
if (a > b) {
  temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  temp = c;
  c = a;
  a = temp;
}
if (b > c) {
  temp = b;
  b = c;
  c = temp;
}
document.write(a + "," + b + "," + c);
