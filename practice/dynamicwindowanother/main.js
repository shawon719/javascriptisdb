function checkName() {
  const name = document.getElementById("n");
  const name2 = /^[0-9A-Za-z]{5,14}$/;
  if (!name2.test(name.value)) {
    alert("please enter minimum 5 and max 14 characters");
    document.getElementById("n").style.borderColor = "10px solid red";
    return false;
  } else {
    return true;
    document.getElementById("n").style.borderColor = "20px solid white";
  }
}

function checkEmail() {
  const email = document.getElementById("e");
  const a = /^[a-z-0-9]+[.]+[a-z-0-9]+@[a-z]+\.[a-z]{2,4}$/;
  if (!a.test(email.value)) {
    alert("please enter your valid email");
    document.getElementById("n").style.borderColor = "20px solid red";
  } else {
    document.getElementById("n").style.borderColor = "20px solid green";
  }
}

function checkPassword() {
  const password = document.getElementById("p");
  const p = /^[a-z]+[.-@-$-%]+[0-9]{3,7}$/;
  if (!p.test(password.value)) {
    alert("please enter correct password ");
    document.getElementById("n").style.borderColor = "20px solid red";
  } else {
    document.getElementById("n").style.borderColor = "20px solid green";
  }
}

function myFunction() {
  const name = document.formm.na.value;
  const email = document.formm.em.value;
  const password = document.formm.pas.value;
  const round = document.formm.round.value;

  doc = open("", "", "width=300px,height=300px,top=150px, left=400px");
  var gender = "";
  var certificate = "";

  for (i = 0; i < document.formm.rgen.length; i++) {
    if (document.formm.rgen[i].checked) {
      gender = document.formm.rgen[i].value;
    }
  }

  for (j = 0; j < document.formm.cer.length; j++) {
    if (document.formm.cer[j].checked) {
      certificate += document.cer[j].value + ",";
    }
  }

  with (doc.document) {
    write("<body style='background-color:pink; padding: 20px'>");
    write("Name:" + name + "<br>");
    write("Email:" + email + "<br>");
    write("Password:" + password + "<br>");
    write("Gender:" + gender + "<br>");
    write("Round:" + round + "<br>");
    write("Certificate:" + certificate + "<br>");
    write(
      "<input  type='button' value='close' onclick='self.close()' style='border:3px solid yellow; backgroung-color:pink; color:blue'>"
    );
  }
}
