// function chkName() {
//   const name = document.getElementById("name");
//   const name2 = /^[A-Za-z]{5,20}$/;
//   if (!name2.test(name.value)) {
//     alert("please enter atleast 5 chaaracters.");
//   }

//   //return false;
//   //   } else {
//   //     //return true;
//   //   }
// }

function chkName() {
  const name = document.ff.name.value;
  if (name.length >= 5 && name.length <= 20) {
    return true;
  } else {
    alert("Please enter at least 5 characters and no more than 20 characters.");
    return false;
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  const a = /^[a-z-0-9]+[.]+[a-z-0-9]+@[a-z]+\.[a-z]{2,4}$/;
  if (!a.test(email.value)) {
    alert("please enter valid email.");
    return false;
  } else {
    return true;
  }
}

function chkPass() {
  const password = document.getElementById("password");
  const p = /^[0-9A-Za-z]+[.-@-$-%]+[0-9]{3,7}$/;
  if (!p.test(password.value)) {
    alert("please enter correct password ");
    document.getElementById("password").style.borderColor = "20px solid red";
  } else {
    document.getElementById("password").style.borderColor = "20px solid green";
  }
}

function myDynamic() {
  const name = document.ff.na.value;
  const email = document.ff.em.value;
  const password = document.ff.pa.value;
  const round = document.ff.ro.value;
  var gender = "";
  var education = "";

  doc = open("", "", "width=300px,height=300px,top=200px,left=900px");

  for (i = 0; i < document.ff.rgen.length; i++) {
    if (document.ff.rgen[i].checked) {
      gender = document.ff.rgen[i].value;
    }
  }

  for (i = 0; i < document.ff.cedu.length; i++) {
    if (document.ff.cedu[i].checked) {
      education += document.ff.cedu[i].value + ",";
    }
  }

  with (doc.document) {
    write(
      "<body style ='background-color:#DB7093; padding:10px 20px; font-size:18px; color:white; border:2px solid black'>"
    );

    write("Name:" + name + "<br>");
    write("Email:" + email + "<br>");
    write("Password:" + password + "<br>");
    write("Round:" + round + "<br>");
    write("Gender:" + gender + "<br>");
    write("Education:" + education + "<br><br>");
    write(
      "<button type='button' onclick='self.close()' style='border:1px solid black; background-color:#d8d9b0; color:purple; width:70px; height:25px;font-size:17px padding-left:10px'>close</button>"
    );
    write(
      "<button type='button' onclick='self.print()' style='border:1px solid black; background-color:#d8d9b0; color:purple; width:70px; height:25px;font-size:17px; margin-left:10px'>print</button>"
    );
  }
}
