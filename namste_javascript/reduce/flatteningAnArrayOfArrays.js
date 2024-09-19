const arrays = [[1, 2], [3, 4], [5]];
// Output: [1, 2, 3, 4, 5]
let out = arrays.reduce((accu, curVal) => {
    return accu.concat(curVal);
}, []);
debugger;
console.log(out);
