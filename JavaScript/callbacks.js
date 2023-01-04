// function show(){
//   console.log("I am show function");
// }

// function goku(callback){
//   callback();
// }

// goku(show); //giving function as argument

// function show(a){
//   console.log("I am a function that gives data" + a);
// }

// function call(a,callback){
//   callback(a);// show ko alag naam se call kar re hai
// }

// call(101,show);

// function show(a){
//   console.log("I am a function that gives data" + a);
// }

// function call(a,callback){
//   callback(a);// show ko alag naam se call kar re hai
// }

// call(101,show);


function ressult(a) {
  console.log("The sum of digit" + a);
}

function myCalculator(num1, num2,callback) {
  let a = num1 + num2;
  callback(a);
}

myCalculator(10,20,ressult);