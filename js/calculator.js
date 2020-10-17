// Calculadora:

function calculate(a) {
  var x = parseFloat(document.calcform.num1.value);
  var y = parseFloat(document.calcform.num2.value);
  var z = document.calcform.result;

  if (a.value == "+") {
    z.value = x + y;
  } else if (a.value == "-") {
    z.value = x - y;
  } else if (a.value == "x") {
    z.value = x * y;
  } else if (a.value == "/") {
    z.value = x / y;
  } else if (a.value == "%") {
    z.value = x % y;
  }
}
