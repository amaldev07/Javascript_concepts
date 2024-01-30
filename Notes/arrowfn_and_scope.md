Q). but in the below code value of testArrow() is 200
you said the lexical surrounding of arrow funciton  in obj is global sowhen we call testArrow() it look for the a in global this :(
// Defining a in the global space
this.a = 100;

const obj = {
    a: 1,
    c: () => {
        return this.a;
    }
};

function testFun() {
    debugger;
    this.a = 200;
    const testArrow = obj.c;
    console.log(testArrow());  // Output: 100
}

testFun();

// Output 200

# -------------------------------------------------


Arrow functions do not have their own this. They inherit this from their lexical scope, i.e., where the arrow function is defined.

Lexical scope refers to the context in which the arrow function is created, not where it is executed.

If an arrow function is created inside an object, it will not have this bound to the object. Instead, it captures this from the surrounding scope where it is defined.