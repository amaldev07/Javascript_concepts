const numbers = [10, 20, 30, 40, 50];
// Output: 30
let out = numbers.reduce((accu, curVal) => {
    return accu + curVal;
}, 0) / numbers.length;
debugger;
console.log(out);

