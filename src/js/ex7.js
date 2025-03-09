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

    // 7.4 - line 51
    asyncHelloWorld();
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

// 7.4
async function asyncHelloWorld() {
    const res = await delayedPrint();
    document.getElementById("async").innerHTML = `Async Print: ${res}`;
}

// 7.5
function delayedPrint_alt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                resolve("Hello World!");
            }
            else {
                reject("Error!")
            }
        }, 2000);
    });
}

const handleAsyncWCatch = () => {
    document.getElementById("pr-hello-alt").innerHTML = "Waiting...";

    asyncHelloWorld_alt();
}

async function asyncHelloWorld_alt() {
    try {
        const res = await delayedPrint_alt();
        document.getElementById("pr-hello-alt").innerHTML = `Async Print: ${res}`;
    } 
    catch (error) {
        document.getElementById("pr-hello-alt").innerHTML = `Async Print: ${error}`;
    }
}

// 7.6
function delayedPr_1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(":D");
        }, 2000);
    });
}
function delayedPr_2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(":D");
        }, 3000);
    });
}

let promises = [];
let pr1_res = ""; 
let pr2_res = "";

const handlePr = (prNum) => {
    if (prNum == 1 && pr1_res == "") {
        const btn = document.getElementById("btn-pr1");
        btn.disabled = true;

        document.getElementById("pr-1").innerHTML = "Waiting...";
        
        const pr1 = delayedPr_1().then((res) => {
            pr1_res = res;
            document.getElementById("pr-1").innerHTML = "Checking...";
            btn.disabled = false;
        });
        if (promises.indexOf(pr1) == -1) promises.push(pr1);
    }
    else if (prNum == 2 && pr2_res == "") {
        const btn = document.getElementById("btn-pr2");
        btn.disabled = true;

        document.getElementById("pr-2").innerHTML = "Waiting...";
        const pr2 = delayedPr_2().then((res) => {
            pr2_res = res;
            document.getElementById("pr-2").innerHTML = "Checking...";
            btn.disabled = false;
        });
        if (promises.indexOf(pr2) == -1) promises.push(pr2);
    }

    if (promises.length === 2) {
        Promise.all(promises)
        .then(() => {
            document.getElementById("pr-1").innerHTML = pr1_res;
            document.getElementById("pr-2").innerHTML = pr2_res;
            document.getElementById("pr-all").innerHTML = "All promises resolved!";
            promises = [];
            pr1_res = pr2_res = "";
            console.log(pr1_res + pr2_res);
        });
    }
    else {
        document.getElementById("pr-all").innerHTML = "Waiting for both promises to resolve...";
    }
}