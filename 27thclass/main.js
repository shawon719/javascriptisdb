function info(a, b, c = 15) {
  var total = a + b;
  document.write("Informaton" + " " + total + c);
  document.write("<br>");
  console.log(" Information" + " " + total);
  document.write("<br>");
  var sum = a + b + c;
  document.write("sum:", sum);
  document.write("<br>");
  console.log("sum:", sum);
}

info(5, 6);
info(6, 8);
info(5, 6, 23);

document.write("<h1>Annoynomous function</h1>");
document.write("<h2>syntaxx:function(){}</h2>");
document.write("<p>there are no name in annoynomous function.</p>");

const sqr = function (d) {
  return d * d;
};

document.write(sqr(3));

document.write("<br>");

document.write("<h1>array function</h1>");
document.write("<h2>syntaxx:(parameter)=>{our work}</h2>");

const arrFunction = (a, b) => {
  //   var a = prompt("enter a");
  //   var b = prompt("enter b");
  if (a > b) {
    document.write(" a is max");
    //return "a is greater";
  } else {
    document.write("b is max");
    //return "b is greater";
  }
};

document.write(arrFunction(7, 8));
console.log(arrFunction(7, 8));

document.write("<br>");

document.write("<h1>array function</h1>");
document.write("<h2>syntaxx:(parameter)=>{our work}</h2>");

const even = (c, d) => {
  c + d;
};

document.write(even(34, 2));
console.log(even(34, 2));

document.write("<br>");

document.write("<h1>Auto invoke Function</h1>");
document.write("<h2>syntaxx:(function(){}() )</h2>");
(function (e, t) {
  document.write(e + t);
  console.log(e + t);
})(4, 5);
document.write("<br>");
(function (name, age) {
  document.write(name + " " + age);
  console.log(name + " " + age);
})("Sharmony", 23);

document.write("<br>");
document.write("<h1>Auto invoke array Function</h1>");
document.write("<h2>syntaxx:(() => {}() )</h2>");
((w, q) => {
  document.write(w * q);
  console.log(w * q);
})(4, 5);

document.write("<br>");

// ((name,age) => {
//     document.write("name:"name+"<br>"+"Age:"age);
//     console.log("name:"name+"<br>"+"Age"age);
// })("sharmony",23);

document.write("<h1>button</h1>");
function inf() {
  alert("Hi there");
}

document.write("<h1>array,max,min and sum</h1>");
var n = [4, 6, 7, 32, 75];
var max = n[0];
var min = n[0];
var sum = 0;
for (i = 0; i < n.length; i++) {
  if (max < n[i]) {
    max = n[i];
  }
  if (min > n[i]) {
    min = n[i];
  }
  sum = sum + n[i];
}

document.write("max num:" + max + "<br>");
console.log("max" + max + "<br>");
document.write("min:" + min + "<br>");
console.log("min:" + min + "<br>");
document.write("sum:" + sum + "<br>");
console.log("sum:" + sum + "<br>");
