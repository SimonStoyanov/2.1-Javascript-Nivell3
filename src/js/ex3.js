'use strict'

// 3.1
function process(_value, callback) {
  callback(_value);
}

function printValue(value) {
  document.getElementById("callback-txt").innerHTML = `Value from callback function: ${value}`;
}

const handleCallback_3_1 = () => {
  const _value = parseFloat(document.getElementById("callback-0").value);
  
  if (isNaN(_value)) {
    document.getElementById("callback-txt").innerHTML = "Input a valid number";
  }
  else {
    process(_value, printValue);
  }
}