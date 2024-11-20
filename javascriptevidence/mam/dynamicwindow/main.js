function myForm() {
  var name = document.form.name.value;
  var address = document.form.add.value;
  var email = document.form.ema.value;
  var password = document.form.pas.value;
  var education = document.form.education.value;

  doc = open(" ", " ", "width:200px,height:200px ");
  var gender = "";
  //
  for (i = 0; i < document.form.gender.length; i++) {
    if (document.form.gender[i].checked) {
      gender = document.form.gender[i].value;
    }
  }

  var course = "";
  for (i = 0; i < document.form.cours.length; i++) {
    if (document.form.cours[i].checked) {
      course += document.form.cours[i].value + ",";
    }
  }

  with (doc.document) {
    write(
      "<body style ='background-color:#DB7093; padding:10px 20px; font-size:18px; color:white '>"
    );

    write("Name:" + name);
    write("<br>");
    write("Address:" + address);
    write("<br>");
    write("Email:" + email);
    write("<br>", "Password:" + password);
    write("<br>", "Gender:" + gender);
    write("<br>", "Education:" + education);
    write("<br>", "Course Name:" + course);
    write(
      "<br>",
      "<input type='button' value='close me' onclick='self.close()'>"
    );
  }
}
