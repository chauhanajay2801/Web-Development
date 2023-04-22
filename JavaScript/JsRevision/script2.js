// //Var ---  Global
// //Let and const ----- Local/Script

// //Hoisting
// //Execution Context
// //Call Stack
// //Closure

// //Anything we write ---- a global execution context is created

// sum();
// sub();
// console.log(a);
// var a = 10;

// function sum(){
//     var num1 = 10;
//     var num2 = 20;
//     console.log(num1+num2);
// }


// function sub(){
//     var num1 = 10;
//     var num2 = 20;
//     console.log(num1-num2);
// }



///////////////////////////////////////////Closure//////////////////////////////////////////////////////////////

// function sum(){
//     var a = 10;
//     function sub(){
//         console.log(a); //it can check the outer environment
//     }
//     sub();
// }

// sum();

/////////////////////////////////////HOF/////////////////////////////////////////////////////////////////////////

// Hof are those which take other function as parameter or return a function

//Callback - function which can be passed as parameter to other function

// function A(a){ //passing a func a means capital A is hof 
     
// }

// function a(){
// // callback because passed as a parameter to big A
// }

// setTimeout(() => { console.log("hello");},3000);
// set timeout is hof and arrow function is callback

//setinterval

// setInterval(()=>{
//     console.log("Referesh")
// },1000);

