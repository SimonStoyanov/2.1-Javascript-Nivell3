'use strict'

// 1.1
const sum = (valueA, valueB) => {
  const result = valueA + valueB
  document.getElementById("result").innerHTML = `The result is == ${result}`;

  if (isNaN(valueA) || isNaN(valueB)) {
    document.getElementById("result").innerHTML = "Invalid numbers inputed";
  }
}

const handleSumInput = () => {
  const num1 = parseFloat(document.getElementById("value-a").value);
  const num2 = parseFloat(document.getElementById("value-b").value);

  sum(num1, num2);
}

// 1.2
const randomNumber = () => {
  var rand = Math.floor(Math.random() * 100);
  document.getElementById("rand").innerHTML = `Generated a random number: ${rand}`;
}

// 1.3
class Person {
  constructor(name) {
    this.name = name;
  }

  greet(){
    if (!this.name.trim()){
      document.getElementById("greet").innerHTML = "Invalid name inputed";
    }
    else {
      document.getElementById("greet").innerHTML = `Hello ${this.name}`;
    }
  }
}

const Greet = () => {
  const inputName = document.getElementById("name").value;
  const _person = new Person(inputName);

  _person.greet();
}

// 1.4
const printNumbers = (arrayNum) => {
  var _string = "";
  
  arrayNum.forEach(element => {
    _string += element + " "
    console.log(element);
  });

  document.getElementById("loopNum").innerHTML = `Array inputed: ${_string}`;
}

const handleArrayInput = () => {
  const input = document.getElementById("numArray").value;
  const _array = input.split(/[\s,]+/).map(num => parseFloat(num.trim()));
  printNumbers(_array);
}

// 1.5
const printIn3sec = () => {
  setTimeout(() => {
    console.log("3 seconds have passed!");
    document.getElementById("timedPrint").innerHTML = "3 seconds have passed!";
  }, "3000");
}

const clearText = () => {
  document.getElementById("timedPrint").innerHTML = "";
}