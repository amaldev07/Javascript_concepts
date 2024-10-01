var globalName = "GlobalName";
function outerArrowFuntion() {
    debugger;
    var name = 'amal';
    console.log(name)
    function anotherFn() {
        var x = 111;
        console.log(this);
    }
    anotherFn();
}
outerArrowFuntion();