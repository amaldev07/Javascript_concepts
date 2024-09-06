function abc() {
    function test() {
        debugger;
        let z = 22;
        var y = 22;
        {
            let x = 30;
            var y1 = 40;
        }
        console.log(x);
    }
    var k = 123;
    test();
}
debugger;
let a = 10;
var b = 20;
abc();