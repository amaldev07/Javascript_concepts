| Feature                        | Prototype Methods                                 | Static Methods                                    |
|--------------------------------|---------------------------------------------------|--------------------------------------------------|
| **Definition**                 | Defined on the prototype of the constructor function (`Constructor.prototype.methodName`) | Defined directly on the constructor function itself (`Constructor.methodName`) |
| **Accessed By**                | Accessed via instances of the constructor (e.g., `instance.methodName()`) | Accessed via the constructor function directly (e.g., `Constructor.methodName()`) |
| **Usage**                      | Used to define behavior shared by all instances of a class or constructor function. | Used for utility or helper functions that are relevant to the class or constructor but not tied to a particular instance. |
| **Inheritance**                | Methods are inherited by all instances created using the constructor function or class. | Not inherited by instances. Available only on the constructor function. |
| **`this` Context**             | `this` refers to the instance calling the method. | `this` refers to the class or constructor function itself. |
| **Purpose**                    | To define instance-specific behavior or shared behavior between instances. | To define class-level functionality or helper methods. |
| **Memory Usage**               | Memory-efficient as they are shared via the prototype chain. | Independent of instances, so no impact on instance memory. |
| **Example**                    | `Person.prototype.sayHello = function() { ... }`  | `Person.sayHello = function() { ... }`            |
