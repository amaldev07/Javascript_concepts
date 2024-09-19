let arr = [2, 3, 4, 5];
/* we need output as [4,6,8,10]
here we use Map */
let output = arr.map((x) => {
    return x * 2;
})
debugger;
console.log(output);
console.log(arr);

arr.map((x) => {
    return x * 2;
})

/* same as below */
arr.map((x) => x * 2);

/* same as below */
arr.map(myMap);
function myMap(x) {
    return x * 2;
}

