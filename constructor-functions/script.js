debugger;
let y = { name: 'amal' };
let z = {};
// y.__proto__ = null;
// let x = Object.create(Person.prototype)
let x = Object.create(y);
console.log(x.name); // amal
// --------------------
function myFunc(){
    return ()=>{};
}
alert(typeof new myFunc());