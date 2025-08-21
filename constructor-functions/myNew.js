function myNew(constructor, ...args) {
  // 1. Create empty object linked to constructor.prototype
  const obj = Object.create(constructor.prototype);

  // 2. Call the constructor with `this` = obj
  constructor.apply(obj, args);

  // 3. Return the object
  return obj;
}

function Person(name) {
  this.name = name;
}

const p1 = myNew(Person, "Amal");

console.log(p1.name);             // Amal
console.log(p1 instanceof Person); // true

