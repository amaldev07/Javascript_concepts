let arr = [1, 2, 3, 4, 5];
const initialValue = 0;
let sum = arr.reduce((accumulator, currentValue, CurrentIndex, originalArray) => {
    return accumulator + currentValue;
}, initialValue);
debugger;
console.log(sum);
