'use strict'

// 6.1
const printForEach = () => {
    const array = ['Anna', 'Bernat', 'Clara'];

    let str = "";
    array.forEach(element => {
        str += element + "      ";
    });

    document.getElementById("print-forEach").innerHTML = `Print: ${str}`;
}