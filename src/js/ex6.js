'use strict'

// 6.1
const printForEach = () => {
    const array = ['Anna', 'Bernat', 'Clara'];

    let str = "";
    array.forEach(element => {
        str += element + " ";
    });

    document.getElementById("print-forEach").innerHTML = `Print: ${str}`;
}

// 6.2
const printForOf = () => {
    const array = ['Anna', 'Bernat', 'Clara'];

    let str = "";
    for (const element of array) {
        str += element + " ";
    }

    document.getElementById("print-forOf").innerHTML = `Print: ${str}`;
}