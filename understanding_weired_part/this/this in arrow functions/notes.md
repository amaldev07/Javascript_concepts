Arrow Functions:

Arrow functions behave differently. this in arrow functions is lexically bound, meaning it takes the value of this from the surrounding context at the time the arrow function is defined.

Example:
javascript
Copy code
function outerFunction() {
    const innerFunction = () => {
        console.log(this);  // `this` is lexically bound
    };
    innerFunction();  // Called as an arrow function 
}

outerFunction();
In this example, innerFunction is an arrow function, so this is taken from the surrounding outerFunction's this value.
If outerFunction is called in the global context (e.g., window in browsers), this in innerFunction will refer to the global object.