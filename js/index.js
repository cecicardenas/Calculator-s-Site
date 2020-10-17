// Validación de inicio de sesión:

function validate() {
  var email = document.login.email.value;
  var password = document.login.password.value;

  if (email == "") {
    alert("Email is mandatory");
    document.login.email.focus();
    return false;
  } else if (password == "") {
    alert("Password is mandatory");
    document.login.password.focus();
    return false;
  } else if(email == password) {
    alert("The password cannot be the same as the user");
    document.login.password.focus();
    return false;
  } else  {
    alert("Validation Successfull");
    return true;
  }
}
