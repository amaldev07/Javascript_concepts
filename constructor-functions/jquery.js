
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    return `Name: ${this.name}, Age: ${this.age}`;
}

let p1 = new Person("John", 30);
debugger;

