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

// 5.4
const arrayReduce = () => {
    let array = [13, 7, 8, 21];
    const sum = array.reduce((acc, n) => acc + n);

    document.getElementById("array-reduce").innerHTML = `Reduced value: ${sum}`;
}

// 5.5
const arrayComplex = () => {
    let array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    const res = array.filter(n => n >= 10).map(n => n*2).reduce((acc, n) => acc + n);

    document.getElementById("array-complex").innerHTML = `Result: ${res}`;
}

// 5.6
const arrayEvery = () => {
    let array = [11, 12, 13, 14];
    const isEvery = array.every(n => n >= 10);

    document.getElementById("array-every").innerHTML = `${isEvery}`;
}
const arraySome = () => {
    let array = [11, 12, 13, 14];
    const isSome = array.some(n => n >= 10);

    document.getElementById("array-some").innerHTML = `${isSome}`;
}