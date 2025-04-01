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
  const rand = Math.floor(Math.random() * 100);
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
  const person = new Person(inputName);

  person.greet();
}

// 1.4
const printNumbers = (arrayNum) => {
  let string = "";
  
  arrayNum.forEach(element => {
    string += element + " ";
    console.log(element);
  });

  document.getElementById("loopNum").innerHTML = `Array inputed: ${string}`;
}

const handleArrayInput = () => {
  const input = document.getElementById("numArray").value;
  const arr = input.split(/[\s,]+/).map(num => parseFloat(num.trim()));
  printNumbers(arr);
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