function promise1() {
    let pr = new Promise(function (resolve, reject) {
        resolve("value1");
    });
    return pr;
}
function promise2() {
    let pr = new Promise(function (resolve, reject) {
        resolve("value2");
    });
    return pr;
}
function promise3() {
    let pr = new Promise(function (resolve, reject) {
        resolve("value3");
    });
    return pr;
}
let myPromise = promise1();
myPromise.then(function (data) {
    console.log(data);
    return data;
    // debugger;
    // return new Promise((re, rej)=>re(99));
}).then(function (data) {
    console.log(data);
    debugger;
})

/* 
In JavaScript, when you return a value from a .then() block, 
that value is automatically wrapped in a resolved promise by default. 
This is why the next .then() gets triggered, even though you're not explicitly returning a promise.

Here’s how it works:

When you call .then(), it expects you to return something, whether it’s a value, a promise, or nothing.
If you return a value (like "sampleValue" in your case), JavaScript internally wraps that value in a resolved promise (e.g., Promise.resolve("sampleValue")).
Since the next .then() in the chain is attached to a promise (whether explicitly created or auto-wrapped), it gets triggered with the resolved value "sampleValue".
So, in your code:

js
Copy code
let myPromise = promise1();
myPromise
  .then(function (data) {
    console.log(data);
    return "sampleValue";  // This is wrapped as Promise.resolve("sampleValue")
  })
  .then(function (data) {
    console.log(data);  // This receives "sampleValue"
  });
In this case, even though you're returning a string, JavaScript treats it as a resolved promise, causing the next .then() to execute.
*/
