let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 2000)
})

async function myAsyncFn(){
    await p();
    console.log("p resolved")
}