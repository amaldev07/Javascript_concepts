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
    let pr1 = await promise1();
    console.log(pr1);

    console.log('P2 Starting...');
    let pr2 = await promise2();
    console.log(pr2);
    console.log('End');
}
myAsyncFun();