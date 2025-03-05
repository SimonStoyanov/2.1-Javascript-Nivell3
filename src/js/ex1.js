'use strict'

// 1.1
const Sum = (valueA, valueB) => {
  const num1 = parseFloat(document.getElementById("value-a").value)
  const num2 = parseFloat(document.getElementById("value-b").value)
  const result = num1 + num2
  document.getElementById("result").innerHTML = `The result is == ${result}`;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Invalid numbers inputed";
  }
}