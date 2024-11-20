document.write(
  "<h1>2.JavaScript program to find largest number among three numbers.</h1>"
);

var a = prompt("enter first num:");
var b = prompt("enter second num:");
var c = prompt("enter third num:");
var large = 0;

if (a >= b && a >= c) {
  large = a;
  //document.write("large:", large);
} else if (b >= a && b >= c) {
  large = b;
  //document.write("large:", large);
} else {
  large = c;
  //document.write("large:", large);
}
document.write("large:", large);
