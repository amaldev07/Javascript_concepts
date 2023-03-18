sum(2)(3)(5);
// --------------
/* Implement the ablove code */

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// sum(1)(2)