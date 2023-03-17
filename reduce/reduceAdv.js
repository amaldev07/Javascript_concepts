let users = [
    { fn: 'Amal', ls: 'Dev', age: 10 },
    { fn: 'Sree', ls: 'Dev', age: 11 },
    { fn: 'Name1', ls: 'ln1', age: 12 },
    { fn: 'Name2', ls: 'ls2', age: 10 },
];
/* exp output
Return an object with age count 
{ 10: 2, 11: 1, 12: 1 } */

users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

// First name of all the people whose age is less than 10 , ie age is 11 or 12 here
users.filter((user) => user.age > 10).map((user) => {
    return user.fn;
})

// the above code using redeuce
users.reduce(function (acc, curr) {
    if (curr.age > 10) {
        acc.push(curr.fn);
    }
    return acc;
}, [])