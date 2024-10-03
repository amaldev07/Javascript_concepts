function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype of Person
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

and

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
// -------------------------------------
// diff b/w below 2
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person =  new Person("amal", "22");
// and 
let person = {
    name : "amal",
    age : "22"
}
