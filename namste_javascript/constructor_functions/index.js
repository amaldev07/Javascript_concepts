function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, My name is ${this.name}, and I am ${this.age} years old`);
    }
}
let p1 = new Person("Amal", 30);
p1.sayHello();
let p2 = new Person("Divya", 30);
p2.sayHello();