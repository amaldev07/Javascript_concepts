// a function async always return a Promise

async function myFun() {
    return 3;
}

// here it wraps 3 in to a promise and return as a fulfilled promise
myFun().then(function(data){
    console.log(data);
})