function myForm() {
  var name = document.form.nam.value;
  var email = document.form.mail.value;
  var course = document.form.course.value;

  doc = open("", "", "width:100px,height:200px");

  var sex = "";
  for (i = 0; i < document.form.gender.length; i++) {
    if (document.form.gender[i].checked) {
      sex = document.form.gender[i].value;
    }
  }

  with (doc.document) {
    write("Name:" + name + "<br>");
    write("Email:" + email + "<br>");
    write("Course:" + course + "<br>");
    write("SEX:" + sex + "<br>");
    write("<input type='submit' value='close' onclick='self.close()'  >");
    write("<input type='submit' value='print' onclick='self.print()'  >");
  }

  with (doc.document) {
    write("<html>");
    write("<head><title>" + title + "</title></head>");
    write("<body style='background-color:aqua '>");
    write(
      "<div style='border:2px solid black ,padding:15px, background-color:red'>Name:" +
        name +
        "<br>"
    );
  }
}
