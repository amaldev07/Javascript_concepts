let P1 = Promise.reject('Success1');
let P2 = Promise.resolve('Success2');
Promise.all([P1, P2]).then(val => {
    console.log('Then - ' + val);
}).catch(err => {
    console.log('Error - ' + err)
})


const p1 = new Promise(resolve =>
    setTimeout(() => {
        console.log('timer success');
        resolve("One")
    }, 2000)
);

const p2 = new Promise((_, reject) =>
    setTimeout(() => {
        console.log('timer failed');
        reject("Failed")
    }, 1000)
);
Promise.race([p1, p2])
    .then(res => console.log('then : ' + res))
    .catch(err => console.log('catch:' + err));

// --------------------

const ap1 = Promise.reject("Error 1");
const ap2 = Promise.resolve("Success 2");
const ap3 = new Promise(resolve =>
    setTimeout(() => {
        console.log('ap3 success');
        resolve("Success 3")
    }, 2000)
);

Promise.any([ap1, ap2, ap3])
    .then(res => console.log('then : ' + res))
    .catch(err => console.log('catch : ' + err));