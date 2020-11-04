const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var exp1 = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email);
  var exp2 = /^\w[^...]{5,8}$/.test(password);

  if (!exp1 || !exp2){
    res.sendFile(__dirname + "/html/failure.html");
  } else {
    res.sendFile(__dirname + "/html/home.html");
  }
});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.get("/html/home", function(request, response) {
  response.sendFile(__dirname + "/html/home.html");
});

app.get("/html/bmi", function(request, response) {
  response.sendFile(__dirname + "/html/bmi.html");
});


app.post("/html/bmi", function(req, res) {
  var x = parseFloat(req.body.num1);
  var y = parseFloat(req.body.num2);

  var bmi = parseFloat(x / Math.pow(y,2));

  if(bmi < 18.5) {
    res.sendFile(__dirname + "/html/low.html");
  } else if(bmi > 18.5 && bmi <= 25) {
    res.sendFile(__dirname + "/html/normal.html");
  } else if(bmi > 25) {
    res.sendFile(__dirname + "/html/overweight.html");
  }

});

app.get("/html/calculator", function(req, res) {
  res.sendFile(__dirname + "/html/calculator.html");
  //console.log("sale bye");

});

// https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384846#overview

app.post("/html/calculator", function(req, res) {
  var n1 = parseFloat(req.body.n1);
  var n2 = parseFloat(req.body.n2);
  console.log("N1= "+ n1 + " N2= "+ n2);
  var sum = parseFloat(n1 + n2);
  console.log("The sum is: "+ sum);
  //res.send("The sum is: "+ sum);
  res.sendFile(__dirname + "The sum is: "+ sum +  "/html/calculator.html")
  //res.sendFile(__dirname + "/html/bmi");
  /*console.log("hello world");
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = x + y;
  console.log(result);
  res.sendFile(__dirname + "/html/bmi");
  var a = req.body.value;

  if (a == "Add") {
    z = x + y;
    console.log(z);
  } else if (a.value == "-") {
    z.value = x - y;
  } else if (a.value == "x") {
    z.value = x * y;
  } else if (a.value == "/") {
    z.value = x / y;
  } else if (a.value == "%") {
    z.value = x % y;
  }


  res.send(" "+ z);*/
});

app.use("/css", express.static(__dirname + '/css'));

app.use("/img", express.static(__dirname + '/img'));

app.use("/html", express.static(__dirname + '/html'));

app.get("/css/index", function(request, response) {
  response.sendFile(__dirname + "/css/index.css");
});

app.get("/img/fondo", function(request, response) {
  response.sendFile(__dirname + "/img/fondo.png");
});


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
