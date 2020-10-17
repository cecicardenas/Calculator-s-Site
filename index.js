/*
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
//https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384658#overview


app.post("/", function(req, res){
  //res.send("The result is: "+ r);
});

app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/html/home.html");
});

app.post("/home", function(req, res) {
  res.sendFile(__dirname + "/html/home.html");

  var email = req.body.email;
  var password = req.body.password;

  if (email == "") {
    alert("Email is mandatory");
    req.body.email.focus();
    return false;
  } else if (password == "") {
    alert("Password is mandatory");
    req.body.password.focus();
    return false;
  } else if(email == password) {
    alert("The password cannot be the same as the user");
    req.body.password.focus();
    return false;
  } else  {
    alert("Validation Successfull");
    res.sendFile(__dirname + "/html/home.html");
    return true;
  }

});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
*/
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

//-------------------
//var superheroes = require("superheroes");

//var mySuperherosName = superheroes.random();

//console.log(mySuperherosName);
