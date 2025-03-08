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
}
