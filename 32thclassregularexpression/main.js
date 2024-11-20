var a = "that is a var";
var n = a.search("var");
document.write(n);
document.write("<br>");
var m = a.search(/Var/i);
document.write(m, "<br>");

var e = a.replace("is", "was");
document.write(e, "<br>");
var w = a.replace(/is/i, "if");
document.write(w, "<br>");

document.write("<h1>multiline matching</h1>");
var f = "\nit is what it is.\nIt Is what IT is";
document.write(f, "<br>");
var h = f.match(/^it/m);
var i = f.match(/^is/m);
document.write(h, "<br>");
document.write(i, "<br>");
