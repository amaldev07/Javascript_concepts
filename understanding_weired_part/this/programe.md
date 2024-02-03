The Key Insight:
The confusion arises from how this behaves differently in functions and arrow functions. Let’s walk through your code carefully and explain why the output is 200 and not 100.

Code Explanation:
javascript
Copy code
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
    console.log(testArrow());  // Output: 200
}

testFun();
Key Concept: Lexical Scoping of Arrow Functions
Global Context (this.a = 100):

Initially, this.a is set to 100 in the global context (which is window in browsers or globalThis in Node.js).
Arrow Function (c):

The arrow function c does not have its own this. Instead, it inherits this from the lexical environment where it is defined.
Since obj.c is defined in the global context, the arrow function binds this from that global scope. At this point, in the global scope, this.a is 100.
Inside testFun():

Inside testFun(), you set this.a = 200. But here’s the key: this inside testFun() depends on how testFun() is called.

If testFun() is called as a regular function, this will refer to the global object (in non-strict mode), which means you are actually setting window.a = 200 (or globalThis.a = 200 in Node.js).

Arrow Function Execution:

When you call testArrow(), which is a reference to obj.c, the arrow function will return this.a. Since this was lexically bound to the global scope, and now in the global scope, this.a is 200, the output is 200.
Why the Output is 200:
The arrow function c captures this from the global scope, and since this.a in the global scope is now 200 (after calling testFun()), it returns 200.
Step-by-Step Flow:
this.a = 100 in the global context sets the global a to 100.
The arrow function obj.c is defined in the global context, so it captures this from the global context.
When testFun() is called, this.a = 200 modifies the global a to 200 because this inside testFun refers to the global object.
The arrow function testArrow() (which points to obj.c) is called. It looks at this.a, which in the global context is now 200.
Conclusion:
The output is 200 because the arrow function captures this from the global context, and you modified this.a to 200 inside testFun(), which affected the global a.

I hope this clears up the confusion! Let me know if this explanation helps.