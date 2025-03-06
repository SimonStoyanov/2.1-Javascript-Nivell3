'use strict'

// 4.1
const handleCombineInput = () => {
    const _inputA = document.getElementById("strArray-a").value.trim();
    const _inputB = document.getElementById("strArray-b").value.trim();
    const _arrayA = _inputA.split(/[\s,]+/);
    const _arrayB = _inputB.split(/[\s,]+/);

    if (_inputA == "" || _inputB == "") {
        document.getElementById("combine").innerHTML = "Invalid";
    }
    else {
        const _newArray = [..._arrayA, ..._arrayB];
        document.getElementById("combine").innerHTML = `New Array: [${_newArray}]`;
    }
}

// 4.2
function addAllValues(...values) {
    let res = 0;
    for (const _value of values) {
        res += _value;
    }

    document.getElementById("addition").innerHTML = `Result: ${res}`;
}

const handleAdditionInput = () => {
    const _input = document.getElementById("numbersArray").value.trim();
    const _array = _input.split(/[\s,]+/).map(Number);

    if (_array.some(isNaN) || _input == "") {
       document.getElementById("addition").innerHTML = "Input invalid, only use numbers";
    }
    else {
        addAllValues(..._array);
    }
}