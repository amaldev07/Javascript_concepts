/* Reference 
https://www.youtube.com/watch?v=zdp0zrpKzIE&t=1417s */
let arr = [3, 8, 4, 6, 11, 9, 1];

//find sum of the elements
arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

arr.reduce(function (acc, curr) {
    tempSum = acc + curr;
    return tempSum;
}, 0)

//find max in an array
arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)

arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, arr[0])

arr.reduce(function (max, curr) {
    return Math.max(max, curr);
}, arr[0])