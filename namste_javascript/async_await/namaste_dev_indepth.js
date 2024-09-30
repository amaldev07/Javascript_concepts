let pr1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Hey I am Promise1')
    }, 10000)
}); // created a promise at this time itselt and timer starts ticking
let pr2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Hey I am Promise2')
    }, 5000)
}); // created a promise at this time itselt and timer starts ticking
debugger;
async function myAsyncFun(params) {
    console.log('Starting...');
    console.log('P1 Starting...');
    let val1 = await pr1; // wait for pr1 to resolve whihc takes 10 seconds
    // by this time the pr2 already intitiated and starts ticking resolved(whihc only takes 5 seconds)
    // thats why we can see "console.log(val2);" immediately after console.log('P2 Starting...');
    console.log(val1);

    console.log('P2 Starting...');
    let val2 = await pr2;
    console.log(val2);
    console.log('End');
}
myAsyncFun();

// --------------- Another way of doing the same code
function promise1() {
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Hey I am Promise1')
        }, 10000)
    });
    return pr;
}
function promise2() {
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Hey I am Promise2')
        }, 5000)
    });
    return pr;
}

async function myAsyncFun(params) {
    console.log('Starting...');
    console.log('P1 Starting...');
    let pr1 = await promise1(); // starts initializeing pr1 and ticking the timer for 10 sec
    // once resolve the below line execute
    console.log(pr1);

    console.log('P2 Starting...');
    let pr2 = await promise2(); // again starts initializeing pr2 and ticking the timer for 5 sec
    // once resolve the promise that is after 5 sec, the below line execute
    console.log(pr2);
    console.log('End');
}
myAsyncFun();