document.write("<h1>for loop</h1>");

document.write("print 10 to 1.<br>");
console.log("print 10 to 1");
for (var i = 10; i >= 1; i--) {
  document.write(i, "<br>");
  console.log(i);
}

document.write("print 1 to 10 .<br>");
console.log("print 10 to 1");
for (var i = 1; i <= 10; i++) {
  document.write(i, "<br>");
  console.log(i);
}

document.write("<br>");

document.write("print even number from 1-50.<br>");
const p = parseFloat(prompt("enter number"));
var u;
for (u = 1; u <= p; u++) {
  if (u % 2 === 0) {
    document.write("even num is: <br>", u);
    console.log("even num is:<br>", u);
  } else {
    document.write(" odd num");
    console.log("odd num");
  }
}

console.log("gg");

// const p = parseFloat(prompt("enter number"));
// if (p % 2 === 0) {
//   document.write("even num is: <br>", p);
// } else {
//   document.write(" odd num");
// }

document.write("<h1>while loop</h1>");

var a = 11;
while (a <= 15) {
  document.write(a + "<br>");
  console.log(a + "<br>");
  a++;
}

document.write("<h1>print 1 to 10 using while loop</h1>");
console.log("<h1>print 1 to 10 using while loop</h1>");
document.write("<br>");
let num = 1;
while (num <= 10) {
  document.write(num, "<br>");
  console.log(num);
  num++;
}

document.write("<br>");
document.write("<h1>print 1 to 10 using for loop</h1>");
console.log("<h1>print 1 to 10 using for loop</h1>");

for (let number = 1; number <= 10; number++) {
  document.write(number, "<br>");
  console.log(number);
}

document.write("<br>");
document.write("<h1>print 21 to 25 using do while loop</h1>");
console.log("<h1>print 21 to 25 using do while loop</h1>");

var m = 21;
do {
  document.write(m + "<br>");
  console.log(m);
  m++;
} while (m <= 25);

document.write("<br>");

document.write("<h1>uses of for in loop</h1>");
var g = "hello world";
for (b in g) {
  document.write(b + "<br>");
  console.log(b);
}

document.write("<br>");
document.write("bhul ache<br>");

document.write("<h1>vowel consonant check</h1>");

var v = prompt("enter your letter");
v = v.toLowerCase();

switch (v) {
  case v == "a" || v == "e" || v == "i" || v == "o" || v == "u":
    document.write("vowels");
    console.log("vowels");
    break;
  default: {
    document.write("consonant");
    console.log("consonant");
  }
}
