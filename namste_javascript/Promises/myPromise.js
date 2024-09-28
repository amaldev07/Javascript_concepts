function completeOrder() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderId: 1234 })
        }, 2000);
    });
    return myPromise;
};
debugger;
completeOrder().then(function (data) {
    console.log(data);
    debugger;
})