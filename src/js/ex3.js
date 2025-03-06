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

// 3.2
function calculator(_valueA, _valueB, callback) {
  callback(_valueA, _valueB);
}

function addValues(_valueA, _valueB) {
  const res = _valueA + _valueB;

  document.getElementById("calc-result").innerHTML = `Result: ${res}`;
}

const handleCalcInput = () => {
  const _valueA = parseFloat(document.getElementById("calc-a").value);
  const _valueB = parseFloat(document.getElementById("calc-b").value);

  if (isNaN(_valueA) || isNaN(_valueB)){
    document.getElementById("calc-result").innerHTML = "Both fields need a valid number";
  }
  else {
    calculator(_valueA, _valueB, addValues);
  }
}