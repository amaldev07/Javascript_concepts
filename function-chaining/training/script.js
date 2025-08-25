// $("ul").addClass("bold").removeClass("color");
// new MiniJQuery("ul").addClass("bold").removeClass("color");

function MiniJQuery(selector) {
    this.elements = document.querySelectorAll(selector);
}

MiniJQuery.prototype.addClass = function (className) {
    this.elements.forEach(el => el.classList.add(className));
    return this;
}

MiniJQuery.prototype.removeClass = function (className) {
    this.elements.forEach(el => el.classList.remove(className));
    return this;
}

function $(selector){
    return new MiniJQuery(selector);
}


// let el = new MiniJQuery("ul").addClass("bold").removeClass("color");
let el$ = $("ul").addClass("bold").removeClass("color");
console.log(el$);


// new Calculator().add(5).multiply(10);

function Calculator(){
    this.value = 0;
}

Calculator.prototype.add = function(val){
    this.value = this.value + val;
    return this;
}

Calculator.prototype.multiply = function(val){
    this.value = this.value * val;
    return this;
}

let result  = new Calculator().add(5).multiply(10);
console.log(result);