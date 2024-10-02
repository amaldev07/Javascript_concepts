function OuterArrowFunction() {
    debugger;
    var name = 'amal';
    console.log(name); // Logs 'amal'
    console.log(this); // Logs the global object in a browser (window) or undefined in strict mode

     
}

let obj = new OuterArrowFunction();
obj.anotherFn();
