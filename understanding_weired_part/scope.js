function x() {
    function a() {
        debugger;
        function b() {
            // var myVar;
            debugger;
            console.log(myVar);
            console.log(myOuterVar);
        }
        var myVar = 2;
        b();
        // console.log(myVar);
    }
    // var myVar = 1;
    var myOuterVar = 3;
    // console.log(myVar);
    a();
}
var myVar = 100;
x();