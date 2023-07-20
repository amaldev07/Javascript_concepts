// function declaration
/* for this you can call the function before its declaration as
a() -> will return //a
b/z while memory allocatioon step of execution context creation 
it allocate space for the function a and store the function a there */
function a() {
    console.log('a called');
}

// ---------------------------------------
function XPathExpression
let b = function () {
    console.log('b called');
}
/* here we cant call b() before the  line 12 before the funtion dfinition
b/w during the memmory allocation stage fo execution context 
it allocate memory for b and with value undefined
in the next step that is in the code execution step only it assign the value (function)
to the variable b
 */