"use strict"
var globalName = "GlobalName";
function outerArrowFuntion() {
    // debugger;
    // console.log(this);
    // var name = 'amal';
    // console.log(name)
    let x = {
        a: 1,
        myfn: function () {
            debugger;
            console.log(this);
        },
        // arrFn: () => {
        //     console.log(this);
        //     debugger;
        // }
    }
    x.myfn();
}
outerArrowFuntion();