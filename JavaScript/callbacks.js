// Hof => Highr order functions 
// Callback => function is calling a function

// function a(){
//   console.log("I was callled by function b");
// }
// function b(){
//   a();
// }

// b();


// const callback = (n) =>{
//   return n**2;
// };

// function cube(callback,n){  // address/reference and the value
//   return callback(n) * n;
// }

// console.log(cube(callback,2)); // n = 2 pass kia





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


// function ressult(a) {
//   console.log("The sum of digit" + a);
// }

// function myCalculator(num1, num2,callback) {
//   let a = num1 + num2;
//   callback(a);
// }

// myCalculator(10,20,ressult);

//////////////////////////////////////Hofffffff//////////////////////////////////////////////////////////
//hof callback

// const arr = ["hey","ji","hello","namaste","ramram ji"];
// arr.forEach((val) => {
  // console.log(val);
// });
//for each is hof and the ()=> inside it is a callback


//@2nd method

// arr.forEach(myfunc); //for each took the reference of arr and for each giving the refernce of other function 
// the value in for each is the address and the myfunc with value is home
//each time for each is called it call my func
// function myfunc(val){
  // console.log(val);
// }



////////////////////////////////////SetTimeOut/////////////////////////////////////////////////////////////

// setTimeout(()=>{
//   console.log("Hello this is the default timeout")},3000);


// function ajay(){     // uppar vale func ka breakdown ye hai
//   console.log("new function")
// }

// setTimeout(ajay,4000);


////////////////////////////////////// setInterval///////////////////////////////////////////////////////////

// setInterval(()=>{console.log("this is a set interval");},1000)


/////////////////////////////callback types total////////////////////////////////////////////////////////////
// how mamny callbacks do we have
// foreach
// map
// filer
// reduce
// find
// every
// some
// sort

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// map

// const numbers = [1,2,3,4,5,6];
// const plus = numbers.map((num)=> num+num) ;
// console.log(plus)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// filter

// const count = ["India","Norway","Netherland","Japan","Germany"];
// const store = count.filter((val)=> val.includes("an"));
// console.log(store)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// reduce means to reduce down the values

const num = [1,2,3,4,5,6,7]
const sum = num.reduce((acc,curr)=> acc+curr,0); //accumulator will collect the value, 
console.log(sum)//current will iterate through it , initial here is 0 means from this point start from 0


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sort

// const names = ["Ajay","Aman","Amit","Shyam","Harsha","Kapil","Harshad","Pritam"]
// console.log(names.sort())
// console.log(names.reverse())

///////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring and spread and rest operator

// const sci = [2.72,3.14,9.81,37]
// let [e, pi, grav, bodytemp] = sci;
// console.log(e, pi, grav, bodytemp)

// const arr1 = [1,2,3];
// let [var1, ,var2] = arr1
// console.log(var1,var2)

// const arr1 = [1,2,3,4,5,6,7,8,9,11,12,13];
// let [var1,var2, ...res ] = arr1
// console.log(var1,var2)
// console.log(res)
