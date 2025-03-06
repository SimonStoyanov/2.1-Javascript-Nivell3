'use strict'

// 4.1
const handleCombineInput = () => {
    const _inputA = document.getElementById("strArray-a").value.trim();
    const _inputB = document.getElementById("strArray-b").value.trim();
    const _arrayA = _inputA.split(/[\s,]+/);
    const _arrayB = _inputB.split(/[\s,]+/);

    if (_inputA == "" || _inputB == "") {
        document.getElementById("combine").innerHTML = "Invalid input";
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

// 4.3
function copyObject(obj) {
    return new Weapon(...Object.values(obj));
}

function Weapon(_type, _power, _cooldown) {
    this.type = _type;
    this.power = _power;
    this.cooldown = _cooldown;
}

const handleCopyObjInput = () => {
    const _type = document.getElementById("wp-type").value;
    const _power = parseFloat(document.getElementById("wp-power").value);
    const _cooldown = parseFloat(document.getElementById("wp-cooldown").value);

    if (isNaN(_power) || isNaN(_cooldown)) {
        document.getElementById("weapons").innerHTML = "Invalid input";
    }
    else {
        let myWeapon = new Weapon(_type, _power, _cooldown);
        let clonedWeapon = new copyObject(myWeapon);

        myWeapon.power += 1;

        document.getElementById("weapons").innerHTML = `
            Your Weapon: ${myWeapon.type} ${myWeapon.power} cooldown: ${myWeapon.cooldown} <br />
            Cloned Weapon: ${clonedWeapon.type} ${clonedWeapon.power} cooldown: ${clonedWeapon.cooldown}`;
    }
}

// 4.4
const handleDestrucuringInput = () => {
    const _input = document.getElementById("array-dest").value.trim();
    const _array = _input.split(/[\s,]+/);

    if (_input == "") {
        document.getElementById("destructured-array").innerHTML = "Invalid input";
    }
    else {
        const [a, b, ...rest] = _array;
        document.getElementById("destructured-array").innerHTML = `var a: ${a}, var b: ${b}, rest: ${rest}`;
    }
}

// 4.5
function printPlayer(_name, _rank, _class) {
    document.getElementById("player").innerHTML = `Player name: ${_name}, rank: ${_rank} & class: ${_class}`;
}

const handlePlayerInput = () => {
    const _name = document.getElementById("pl-name").value;
    
    if (_name == "") {
        document.getElementById("player").innerHTML = "Invalid name";
        return;
    }

    const _rank = document.getElementById("pl-rank").value;
    const _class = document.getElementById("pl-class").value;

    const array = [_name, _rank, _class];

    printPlayer(...array);
}