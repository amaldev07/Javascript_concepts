/* function myLoop() {
    debugger;
    console.log("starting");
    for (var i = 0; i < 5; i++) {
        function xx() {
            var x = i;
            setTimeout((i) => {
                console.log(x)
            }, x * 1000)
        }
        xx();
    }
} */
function myLoop() {
    debugger;
    console.log("starting");
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
myLoop();