function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 2000)
    })
}
// p1().then(()=>{
//     console.log("promise resolved")
// });

async function myAsyncFn() {
    await p();
    console.log("p resolved")
}

myAsyncFn();