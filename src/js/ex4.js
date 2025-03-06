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