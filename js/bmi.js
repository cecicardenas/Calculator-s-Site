function calculate(a) {
  var x = parseFloat(document.calcform.num1.value);
  var y = parseFloat(document.calcform.num2.value);
  var z = document.calcform.result;

  if(a.value == "BMI") {
    z.value = x / Math.pow(y,2);
  }
}
