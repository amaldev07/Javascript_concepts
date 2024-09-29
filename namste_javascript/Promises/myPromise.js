function completeOrder() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderId: 1234 })
        }, 2000);
    });
    return myPromise;
};
debugger;
let promise = completeOrder();
console.log(promise);
promise.then(function (data) {
    console.log(data);
    debugger;
})
setTimeout(() => {
    console.log(promise);
}, 4000)