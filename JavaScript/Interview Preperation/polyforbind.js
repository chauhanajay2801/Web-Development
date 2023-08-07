let name = {
    first:"Ajay",
    last:"Chauhan"
}

let printName = function(){
    console.log(this.first + " " + this.last);
}

let printMyName = printName.bind(name);
printMyName(); 
// replicate the same bind method


Function.prototype.myBind = fumc(){
let obj = this
    return function(){
    ();
}
}

let printMyName2 = printName.myBind(name);
printMyName(); 