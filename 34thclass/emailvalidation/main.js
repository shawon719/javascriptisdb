//check email validation
function checkEmail() {
  const email = document.getElementById("ma");
  //const a = /^[a-z-0-9.%+-]+@[a-z-0-9.-]+\.[a-z]{2,4}$/;
  const a = /^[a-z-0-9.]+@[a-z-0-9]+\.[a-z]{2,4}$/;

  if (!a.test(email.value)) {
    alert("please enter your valid email.");
  }
}

//name check with regular expression using pattern

function nameChk() {
  //var name = document.form.name.value;

  var name = document.getElementById("nam");
  var name2 = /^[0-9A-Za-z]{4,11}$/;

  if (!name2.test(name.value)) {
    alert("please enter minimum 4 and max 11 characters");
    document.getElementById("nam").style.borderColor = "10px solid yellow";
    return false;
  } else {
    return true;
  }
}

//name check without regular expression using if else
// function nameChk() {
//   var name = document.form.name.value;
//   if (name.length > 4 && name.length < 11) {
//     return true;
//   } else {
//     alert("name should be 11 characters");
//     return false;
//   }
// }

function subForm() {
  //var email = document.form.email.value;
  var email = document.form.ema.value;
  var name = document.form.name.value;

  doc = open("", "", "width=200px,height=200px=");
  with (doc.document) {
    write("Name:" + name + "<br>");
    write("Email:" + email + "<br>");
  }
}
