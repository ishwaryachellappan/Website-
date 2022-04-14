function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav(x) {
  document.getElementById("mySidepanel").style.width = "0";
}

function validate() {
  var nameText = document.subscribeForm.Name;
  var mailText = document.subscribeForm.Email;
  if (validateName(nameText)) {
    if (ValidateEmail(mailText)) {
      window.location = "index.html";
    }
  }
  return false;
}

function validateName(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value == "") {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  } else {
    return true;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function EmailValidation(enteredEmail) {
  var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (enteredEmail.value.match(enteredEmail)) {
    alert("Email Successfully Valid");
    document.form1.text1.focus();
    return true;
  } else {
    alert("Sorry You have Entered Invalid Email");
    document.form1.text1.focus();
    return false;
  }
}
