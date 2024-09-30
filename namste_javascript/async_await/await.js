function promise1() {
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Hey I am Promise1')
        }, 7000)
    });
    return pr;
}


async function myAsyncFun(params) {
    console.log('Starting...');
    let pr1 = await promise1();
    console.log(pr1);
    console.log('Ending...');
}

myAsyncFun();