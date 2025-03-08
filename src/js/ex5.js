'use strict'

// 5.1
const arrayPow = (power) => {
    let array = [1, 2, 3, 4];
    array = array.map(number    => {
        return Math.pow(number, power);
    })

    document.getElementById("array-pow2").innerHTML = `The new values are: [${String(array)}]`;
}