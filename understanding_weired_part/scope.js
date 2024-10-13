
function a() {
    debugger;
    function b() {
        // var myVar;
        debugger;
        console.log(myVar);
    }
    b();
    var myVar = 2;
    // console.log(myVar);
}
// var myVar = 1;
// console.log(myVar);
a();