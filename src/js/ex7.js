'use strict'

// 7.1
function delayedPrint() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}
 
const pr_helloWorld = () => {
    document.getElementById("pr-hello").innerHTML = "Waiting...";

    delayedPrint().then((str) => {
        document.getElementById("pr-hello").innerHTML = str;
    });
    // 7.2
    delayedPrint().then((str) => {console.log(str)});
}

// 7.3
function checkInput(input) {
    return new Promise((resolve, reject) => {

        if (input == "Hello") {
            setTimeout(() => {
                resolve("Hello!");
            }, 2000);
        }
        else {
            reject("Invalid input");
        }
    });
}

const pr_isHello = () => {
    const _input = document.getElementById("input-hello").value;
    const _output = document.getElementById("pr-input-hello");

    _output.innerHTML = "Waiting...";

    checkInput(_input)
        .then((message) => { _output.innerHTML = `${message}` })
        .catch((error) => { _output.innerHTML = `${error}` });
}