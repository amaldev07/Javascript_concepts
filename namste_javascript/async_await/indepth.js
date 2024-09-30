function promise1() {
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Hey I am Promise1')
        }, 7000)
    });
}
function promise2() {
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Hey I am Promise2')
        }, 4000)
    });
}

async function myAsyncFun(params) {
    console.log('Starting...');
    let pr1 = await promise1();
    
}