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