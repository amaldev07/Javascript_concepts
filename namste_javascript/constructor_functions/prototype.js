function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

// Define a method on the prototype of Animal
Animal.prototype.makeSound = function() {
    console.log(`${this.type} says ${this.sound}`);
};

let dog = new Animal('Dog', 'Woof');
let cat = new Animal('Cat', 'Meow');

dog.makeSound(); // Output: Dog says Woof
cat.makeSound(); // Output: Cat says Meow

console.log(dog); // Logs: Animal { type: 'Dog', sound: 'Woof' }
console.log(cat); // Logs: Animal { type: 'Cat', sound: 'Meow' }
