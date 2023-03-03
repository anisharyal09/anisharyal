function calculate() {
    var expression = document.getElementById("expression").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
  }
  