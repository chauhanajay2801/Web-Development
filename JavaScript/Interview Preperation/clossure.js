// function a(a,b){
//     return function (c){
//         return a+b+c;
//     }
    
// }

// // let dip = a(9,8)(5);
// // console.log(dip)

// let dip = a(7,7);
// console.log(dip(3));



// closure example

// function calculate(x) {
//     function multiply(y) {
//         return x * y;
//     }
//     return multiply;
// }

// const multiply3 = calculate(3)(6);
// console.log(multiply3); 
// returns calculate function definition
// console.log(multiply3(6)); // 18


function a(){
    var a = 10;
    function b(){
        console.log(a);
    }
    return b;
}

var b = a();
console.log(b);
b();