let users = [
    { fn: 'Amal', ln: 'Dev' },
    { fn: 'Sree', ln: 'Dev' },
    { fn: 'Kannan', ln: 'Mon' }
];

users.map((user) => {
    let fn = user.fn + ' ' + user.ln;
    return fn;
});

/* Output
 ['Amal Dev', 'Sree Dev', 'Kannan Mon'] */