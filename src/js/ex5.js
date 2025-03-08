'use strict'

// 5.1
const arrayPow = (power) => {
    let array = [1, 2, 3, 4];
    array = array.map(number => {
        return Math.pow(number, power);
    })

    document.getElementById("array-pow2").innerHTML = `The new values are: [${String(array)}]`;
}

// 5.2
const arrayEven = () => {
    let array = [1, 2, 3, 4];
    array = array.filter(n => n % 2 == 0);

    document.getElementById("array-even").innerHTML = `The new values are: [${String(array)}]`;
}

// 5.3
const arrayFind = () => {
    let array = [1, 10, 8, 11];
    const nOver10 = array.find(n => n > 10);

    document.getElementById("array-find").innerHTML = `Found value: ${nOver10}`;
}