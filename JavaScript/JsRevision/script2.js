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

//////////////////////////////////////////////////////for each//////////////////////////////////////////////////////////////

// let names = ["Ajay","Bhushan","Chahat","Dipesh","Esha","Farukh"];

// names.forEach((val)=>{ //for each is hof and arrow is callback
    // console.log(val)
// })

//////////////////////////////////////////////////Map filter reduce////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////// Map --- to connect certain with all the operation

// const number = [1,2,3,4,5];
// const num = number.map((val)=> // because it is iteration over every element we need some thing to hold the value
//   val+val);
//   console.log(num);


//////////////////////////////////////////////////////////// Filter --- to filter the data in the given data

// const  country = ["India","china","Pakistan","Afghanistan","bangladesh","nepal"];

// const count = country.filter((country) => country.includes("an"));
// console.log(count)

////////////////////////////////////////////////////////// Reduce --- bring single value

// const number = [1,2,3,4,5];
// const sum = number.reduce((acc,curr)=> acc+curr, 1);
// console.log(sum);

////////////////////////////////Promise///////////////////////////////////////

const makePromise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        const arrone = ["Html","Css","Js"];
        if (arrone.length>0){
            resolve("completed");
        } else{
            reject("incompleted");
        }
      },2000)
});

makePromise.then((result)=>{ //result is written to handle the value we got
   console.log(result)  
}).catch((result)=>{
    console.log(result)
})

//the above approach had a few problems so we introduced async and await