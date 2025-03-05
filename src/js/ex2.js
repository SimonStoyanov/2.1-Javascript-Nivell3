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
  const _age = document.getElementById("age").value;
  canDrive(_age);
}

// 2.2
const isBigger = (valueA, valueB) => {
  if (valueA > valueB) {
    document.getElementById("compare").innerHTML = `${valueA} > ${valueB}`;
  }
  else if (valueA < valueB) {
    document.getElementById("compare").innerHTML = `${valueB} > ${valueA}`;
  }
  else {
    document.getElementById("compare").innerHTML = `${valueA} == ${valueB}`;
  }
}

const handleComparisonInput = () => {
  const _valueA = document.getElementById("value-a").value;
  const _valueB = document.getElementById("value-b").value;

  isBigger(_valueA, _valueB);
}