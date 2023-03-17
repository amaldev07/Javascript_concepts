let users = [
    { fn: 'Amal', ls: 'Dev', age: 10 },
    { fn: 'Sree', ls: 'Dev', age: 11 },
    { fn: 'Name1', ls: 'ln1', age: 12 },
    { fn: 'Name2', ls: 'ls2', age: 10 },
];
// get user details of ages above or equal 11
let newUsers = users.filter((user) => {
    return user.age >= 11;
})

/* Output
[
    {
      "fn": "Sree",
      "ls": "Dev",
      "age": 11
    },
    {
      "fn": "Name1",
      "ls": "ln1",
      "age": 12
    }
  ] */