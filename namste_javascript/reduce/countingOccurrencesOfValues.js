const items = ['apple', 'banana', 'orange', 'apple', 'orange'];
// Output: { apple: 2, banana: 1, orange: 2 }
let out = items.reduce((accu, curVal) => {
    accu[curVal] = (accu[curVal] || 0) + 1;
    return accu;
}, {});
debugger;
console.log(out);
