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

// 6.3
const arrayFiltered = () => {
    let array = [1, 2, 3, 4, 5, 6];

    array = array.filter(n => n % 2 == 0);

    document.getElementById("print-filtered").innerHTML = `New Array: [${String(array)}]`;
}

// 6.4
const printForIn = () => {
    let obj = {
        name: "Ona",
        age: 25,
        city: "Barcelona"
    };

    let str = "";
    for (const key in obj) {
        str += key + ": " + obj[key] + " ";
    }

    document.getElementById("print-forIn").innerHTML = `Print: { ${str}}`;
}

// 6.5
const printForOf_Break = () => {
    let numbers = [1, 2, 3, 4, 5, 6];

    let str = "";
    for (const element of numbers) {
        if (element == 5)   break;

        str += element + " ";
    }

    document.getElementById("print-forOfBreak").innerHTML = `Print: [ ${str}]`;
}

// 6.6
const printForOf_Index = () => {
    let names = ["Anna", "Bernat", "Clara"];

    let str = "";
    let i = 0;
    for (const element of names) {
        str += element + " index: " + i++ + "<br\>";
    }

    document.getElementById("print-forOfIndex").innerHTML = `Print: <br\>${str}`;
}