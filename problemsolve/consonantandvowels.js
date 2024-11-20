document.write(
  "<h1>Javascript program counting vowels, consonants and show the occurrance.</h1>"
);

//var arr ="hello";
var arr = prompt("enter string:");
var conCount = 0;
var vCount = 0;
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (
    arr[i] == "a" ||
    arr[i] == "e" ||
    arr[i] == "i" ||
    arr[i] == "o" ||
    arr[i] == "u"
  ) {
    vCount++;
  }
  if (
    arr[i] != "a" &&
    arr[i] != "e" &&
    arr[i] != "i" &&
    arr[i] != "o" &&
    arr[i] != "u"
  ) {
    conCount++;
  }

  count = conCount + vCount;
}
document.write("consonant:", conCount);
document.write("<br>");

document.write("vowel:", vCount);
document.write("<br>");

document.write("count: ", count);
