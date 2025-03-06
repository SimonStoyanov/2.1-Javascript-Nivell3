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

// 3.3
function waitAndGreet(_name, callback) {
  setTimeout(() => {
    callback(_name);
  }, 2000);
}

function greet(_name) {
  document.getElementById("greet").innerHTML = `Hi ${_name}!`;
}

const handleGreetInput = () => {
  const _name = document.getElementById("name").value;

  if (_name == "") {
   document.getElementById("greet").innerHTML = "Input a valid text";
  }
  else {
    waitAndGreet(_name, greet);
  }
}

// 3.4
function processElements(_array, callback) {
  document.getElementById("array-print").innerHTML = "Your Array is: [ "

  _array.forEach(element => {
    callback(element);
  });

  document.getElementById("array-print").innerHTML += "]";
}

function printArrayValue(_value) {
  document.getElementById("array-print").innerHTML += `'${_value}' `;
}

const handleArrayInput = () => {
  const _input = document.getElementById("array").value.trim();
  const _array = _input.split(/[\s,]+/);

  if (_input == "") {
    console.log(_array);
    document.getElementById("array-print").innerHTML = "Input string or numbers separated by ',' or ' '"
  }
  else {
    console.log(_array);
    processElements(_array, printArrayValue);
  }
}