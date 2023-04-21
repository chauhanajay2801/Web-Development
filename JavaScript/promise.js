// Promise
// Pending
// Fullfilled
// Rejected

//////////////////////////////////Event Loop//////////////////////////////////////////////////////////

// certain action needs to be done

// const userOne =() =>
// {console.log("Hello one");};

// const userTwo =() =>{
//     setTimeout(()=>{
     
//         console.log("Hello i am inside timeout")  //promise ----------rejected,fufilled

//     },3000)
//     console.log("Hello two");};

    
// const userThree =() =>
// {console.log("Hello three");};

// userOne();
// userTwo();
// userThree();

//promise came to solve that event loop problem only


//////////////////////////////////////////////////////Promise////////////////////////////////////////////////////////////////////////

// const one = () => {
//     return "i am index page";
// };

// const two = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Credential Correct");
//         },3000)
//     });
// };

// const three = () => {
//     return "redirect to homepage";
// };

// const callMe = async () => {
//     let Valone = one(); //going to one its returning val 1 and then the value is coming in Valone 
//     console.log(Valone)

//     let Valtwo = await two();  
//     console.log(Valtwo)

//     let Valthree = three();  
//     console.log(Valthree)

// }

// callMe();

   
