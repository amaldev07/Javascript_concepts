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

// Output
