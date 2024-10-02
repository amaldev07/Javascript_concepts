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
