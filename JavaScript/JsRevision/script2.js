//Var ---  Global
//Let and const ----- Local/Script

//Hoisting
//Execution Context
//Call Stack
//Closure

//Anything we write ---- a global execution context is created

sum();
sub();
console.log(a);
var a = 10;

function sum(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1+num2);
}


function sub(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1-num2);
}



