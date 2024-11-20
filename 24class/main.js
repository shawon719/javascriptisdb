//splice() fun new array create kore

// splice() function use kore add element

var a = ["shawon", "hashem", "Sharmony"];
// document.write(a);
// console.log(a);

document.write("<br>");
var b = a.splice(2, 0, "rinjin");
document.write(a);
console.log(a);

document.write("<br>");

var c = a.splice(3, 0, "ruka", "NITU");
document.write(a);
console.log(a);
document.write("<br>");
//splice() use kore delete element

var d = a.splice(5, 1);
document.write(a);
console.log(a);

document.write("<br>");

//slice() function array change kore
//slice() function array thaka delete kore.

var e = [1, 4, 7, 6, 3, 1, 9];
document.write(e);
console.log(e);
document.write("<br>");
var w = e.slice(1, 2);
document.write(w);
console.log(w);

document.write("<br>");
document.write(w);
console.log(e);

document.write("<br>");
var k = e.slice(-4, -3);
document.write(k);
console.log(k);

document.write("<br>");
const arr = [10, 20, 30, 40, 50];
const narr = arr.slice(2, 4);

document.write(narr);
console.log(narr);

document.write("<br>");
const marr = arr.slice(2, 5);
document.write(marr);
console.log(marr);

document.write("<br>");

const p = arr.splice(2, 1);
document.write(arr);
console.log(arr);

//array concat

var aa = ["A", "B", "C", "D"];
var bb = ["E", "F", "G", "H"];
var cc = ["I", "J", "K"];
document.write(aa);
console.log(aa);
document.write("<br>");
document.write(bb);
console.log(bb);
document.write("<br>");
var dd = aa.concat(bb);
document.write(dd);
console.log(dd);
document.write("<br>");
var ff = aa.concat(bb, cc);
document.write(ff);
console.log(ff);
