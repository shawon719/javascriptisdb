var d = 7 === "7";
document.write(d);

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    // break;
    continue;
  }
  text += "THE number is " + i + "<br>";
}
document.write(text);
// left shift
let a = 10 << 2;

document.write(a);

document.write("<h1>array max,min,sum of max and min,sum full array</h1>");

var n = [4, 5, 8, 68, 79, 1];
var max = n[0];
var small = n[0];
var sum = 0;
for (i = 0; i < n.length; i++) {
  if (max < n[i]) {
    max = n[i];
  }
  if (small > n[i]) {
    small = n[i];
  }
  sum += n[i];
}
document.write("max:" + max + "<br>");
console.log("max:" + max + "<br>");
document.write("small:" + small + "<br>");
console.log("smalll" + small + "<br>");
document.write("sum:" + sum + "<br>");

document.write("<h1>pattern 1</h1>");

var m = 5;
for (i = 1; i <= m; i++) {
  for (j = 1; j <= m; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<h1>pattern 2</h1>");
var m = 5;
for (i = 1; i <= m; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<h1>pattern 3</h1>");
var m = 5;
for (i = 1; i <= m; i++) {
  for (j = 1; j <= m - i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<h1>pattern 4</h1>");

var m = prompt("Enter the value of line:");
for (i = 1; i <= m; i++) {
  for (j = 1; j <= m - i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<h1>pattern 5</h1>");

var m = prompt("Enter the value of line:");
for (i = 1; i <= m; i++) {
  for (j = 1; j <= m - i; j++) {
    document.write(" ");
  }
  for (k = 0; k < 2 * i - 1; k++) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<h1>pattern 6(munna)</h1>");

for (let i = 0; i <= 5; i++) {
  let p = " ";
  for (let j = 0; j < 5; j++) {
    p = p + "*";
  }
  document.write("<br>");
  document.write(p);
  console.log(p);
}

document.write("<h1>pattern 7</h1>");
let t = 5;
// External loop
for (let i = 1; i <= t; i++) {
  // printing spaces
  for (let j = 1; j < t - i; j++) {
    document.write("space ");
  }
  // printing stars
  for (let k = 0; k <= 2 * i - 1; k++) {
    document.write("*");
  }

  document.write("<br>");
  console.log();
}
