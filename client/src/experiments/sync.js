
// Synchronous:
/*
var someRequest = () => {
    setTimeout(() => {
        console.log("Fetched results")
    }, 1000);
}

var start = Date.now() / 1000; 
someRequest();

console.log(`'Runtime': ${(Date.now() / 1000) - start }`);
*/

// Using callbacks:
/*
const someRequest = (callback) => {
    setTimeout(() => {
        console.log("Fetched results");
        callback();
    }, 1000);
}

const finish = () => {
    console.log(`'Runtime': ${(Date.now() / 1000) - start }`);
}

const start = Date.now() / 1000; 
someRequest(finish);
*/

// Using promises
/*
const someRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched result");
        }, 1000);
    });
}

const finish = () => {
    console.log(`'Runtime': ${(Date.now() / 1000) - start }`);
}

const start = Date.now() / 1000; 

someRequest()
    .then((data) => {
        console.log(`Received data: ${data}`);
    })
    .catch((err) => {
        console.log(`Caught an error: ${err.message}`)
    });
*/

// Async with await
const someRequest = () => {
    setTimeout(() => {
        return "Fetched result";
    }, 1000);
};

async function myFunc() {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

myFunc()
    .then(data => {
        console.log(data);
    });
