function multiply(x, y, z) {
    return x * y * z;
}

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiplyByTwo.bind(this, 3);
let ans = multiplyByThree(4);
console.log(ans);

