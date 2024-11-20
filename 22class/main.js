/* function myFunction() {
//   let nam = "shawon";
//   document.write("this is " + " " + nam);
// }

// myFunction();
// document.write(nam);

// function sum() {
//   let num = 4 + 5;
//   document.write(num);
//   document.write("<br>");
//   document.write(
//     "this is positive number" + ":" + num + " " + " positive number"
//   );
// }
// sum();

// const name = "sharmony hashem";
 document.write("this is " + ":" + name + " " + "She is 23 years old.");
*/

/* object data type start from hereR*/

let profile = {
  name: "Badhon",
  id: 1285366,
  subject: "cse",
};

document.write(profile.name + " " + profile.id + " " + profile.subject);
console.log(profile.name);

//arrays literals

document.write("<br>");

let trainee = ["rajib", "ali", "rafi", "rabbani"];
document.write(trainee);
console.log(trainee);
console.log(typeof trainee);
console.log(trainee.length);
console.log(trainee[3]);
console.log(trainee.join("*"));
console.log(trainee.concat("Sharmony", "rukaiya"));
document.write(trainee.join("*"));
document.write(trainee.concat("Sharmony", "rukaiya"));

let cars = [];
cars = "Totota";
cars = "t";

document.write(cars);
console.log(cars);

document.write("<br>");

const arr = ["bangla", "english", "math"];
document.write(arr);
//legth of this arr
document.write("<br>");
document.write(arr.length);
console.log(arr.length);

//join of this arr
document.write("<br>");
document.write(arr.join("&"));
console.log(arr.join("&"));

//concat in this arr

document.write("<br>");
document.write(arr.concat("physics", "chemistry"));
console.log(arr.concat("physics", "chemistry"));

//sort
document.write("<br>");
let n = [4, 5, 3, 7, 9, 1];
document.write(n.sort());
console.log(n.sort());

//reverse

document.write("<br>");

let n1 = ["shawon", "ruku", "jabela"];
document.write(n1.reverse());
console.log(n1.reverse());
