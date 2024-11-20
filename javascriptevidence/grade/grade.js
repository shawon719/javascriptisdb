var marks = parseInt(prompt("Enter the value of Marks:"));
if (marks >= 80) {
  document.write("Student grade is :" + " 'A+'");
} else if (marks >= 70) {
  document.write("Student grade is:" + " 'A'");
} else if (marks >= 60) {
  document.write("Student grade is :" + " 'B'");
} else {
  document.write("fail");
}
