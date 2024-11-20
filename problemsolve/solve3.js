document.write(
  "<h1>3.JavaScript program to find smallest number,larger number & sum up array of numbers.</h1>"
);
var a = [4, 6, 32, 67, 33, 56, 53];
var max = a[0];
var min = a[0];
var sum = a[0];

for (var i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
    //document.write("max number is:", max);
  }
  if (min > a[i]) {
    min = a[i];
    //document.write("max number is:", max);
  }
  sum = sum + a[i];
}

document.write("max:" + max + "<br>");
console.log("max:" + max + "<br>");
document.write("small:" + min + "<br>");
console.log("smalll" + min + "<br>");
document.write("sum:" + sum + "<br>");
