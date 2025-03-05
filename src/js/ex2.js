'use strict'

// 2.1
const canDrive = (age) => {
  if (age >= 18) {
    document.getElementById("drive").innerHTML = "Can drive";
  }
  else {
    document.getElementById("drive").innerHTML = "Cannot drive";
  }
}

const handleDriveInput = () => {
  const _age = parseFloat(document.getElementById("age").value);
  
  if (isNaN(_age)) {
    document.getElementById("drive").innerHTML = "Invalid input, please put a number";
  }
  else {
    canDrive(_age);
  }
}

// 2.2
const isBigger = (valueA, valueB) => {
  var _string = valueA > valueB ? `${valueA} > ${valueB}` : 
      valueA != valueB ? `${valueB} > ${valueA}` : `${valueA} == ${valueB}`;

  document.getElementById("compare").innerHTML = _string;
}

const handleComparisonInput = () => {
  const _valueA = parseFloat(document.getElementById("value-a").value);
  const _valueB = parseFloat(document.getElementById("value-b").value);

  if (isNaN(_valueA) || isNaN(_valueB)) {
    document.getElementById("compare").innerHTML = "Invalid input, please put a number in both fields";
  }
  else {
    isBigger(_valueA, _valueB);
  }
}

// 2.3
const checkValueSign = (value) => {
  const _string = value > 0 ? `${value} is positive` : 
    value < 0 ? `${value} is negative` : `${value} is == 0`;
  
  document.getElementById("valueSign").innerHTML = _string;
}

const handleCheck = () => {
  const _value = parseFloat(document.getElementById("value").value);

  if (isNaN(_value)) {
    document.getElementById("valueSign").innerHTML = "Invalid input, please put a number";
  }
  else {
    checkValueSign(_value);
  }
}

const maxValue = (valueA, valueB, valueC) => {
  const _string = valueA > valueB ? `${valueA} is the bigger number` :
    valueB > valueC ? `${valueB} is the bigger number` : `${valueC} is the bigger number`;

  document.getElementById("max").innerHTML = _string;
}

const handle3wayInput = () => {
  const _valueA = parseFloat(document.getElementById("max-a").value);
  const _valueB = parseFloat(document.getElementById("max-b").value);
  const _valueC = parseFloat(document.getElementById("max-c").value);

  if (isNaN(_valueA) || isNaN(_valueB) || isNaN(_valueC)) {
    document.getElementById("max").innerHTML = "Invalid input, please put a number in the three fields";
  }
  else {
    maxValue(_valueA, _valueB, _valueC);
  }
}

// 2.4
const checkParityInArray = (array) => {
  var _string = "";
  
  if (array.some(isNaN)) {
    _string = "Invalid input, check that there are no issues on the field";
  }
  else {
    _string += "Parity checked: ";

    array.forEach(element => {
      if (!Number.isInteger(element)) {
        _string = "Invalid input, decimal numbers are not valid";
        return;
      }
      _string += (element % 2 == 0 ? "even" : "odd") + " ";
    });
  }

  document.getElementById("parity").innerHTML = _string;
}

const handleParityInput = () => {
  const input = document.getElementById("parityArray").value.trim();
  const _array = input.split(/[\s,]+/).map(num => parseFloat(num.trim()));
  checkParityInArray(_array);
}