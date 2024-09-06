function myLoop(){
    debugger;
    console.log("starting");
    for(var i=0;i<5;i++){
        function xx(){
            var x= i;
        setTimeout((i)=>{
            console.log(x)
        },x*1000)
    }
    xx();
    }
}
myLoop();