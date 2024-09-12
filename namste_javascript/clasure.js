function a() {
    var ay = 20;
    var az = 20;
    console.log(az);
    b();
    function b() {
        var az = 30;
        console.log(ay);
    }
}
debugger;
var ax = 10;
a();