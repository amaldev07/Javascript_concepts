function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 2000)
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(444);
        }, 1000)
    })
}
/* p1().then(()=>{
    console.log("promise resolved")
}); */

async function myAsyncFn() {
    let a = await p1();
    console.log("p1 resolved", new Date())
    await p2();
    /* return await p2(); */
    console.log("p2 resolved", new Date())
    return 1;
}
console.log(new Date());
myAsyncFn().then((x) => {
    // debugger
});