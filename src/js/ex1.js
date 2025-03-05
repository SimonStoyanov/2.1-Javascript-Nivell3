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