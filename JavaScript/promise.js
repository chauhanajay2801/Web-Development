// Promise
// Pending
// Fullfilled
// Rejected

//////////////////////////////////Event Loop//////////////////////////////////////////////////////////

// certain action needs to be done

const userOne =() =>
{console.log("Hello one");};

const userTwo =() =>{
    setTimeout(()=>{
     
        console.log("Hello i am inside timeout")  //promise ----------rejected,fufilled
        
    },3000)
    console.log("Hello two");};

    
const userThree =() =>
{console.log("Hello three");};

userOne();
userTwo();
userThree();

//promise came to solve that event loop problem only