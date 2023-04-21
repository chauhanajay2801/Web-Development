//Conditions

//ifelse
//switch case
//ternary condition

// let Bankaccount = 5000000000
// if(Bankaccount==5){
//     console.log("yeah bro")
// }
// else if(Bankaccount==500000){
//     console.log("alto")
// }
// else{
//     console.log("i am happy bro")
// }

///////////////////////////////////////////////Switch case///////////////////////////////////////////////////////

// let user = "Human";

// switch(user){
//     case "Human":
//         console.log("Hello World");
//         break;
// case "insaan":
//     console.log("Holaaa");

// }

//////////////////////////////////////////Ternary operator/////////////////////////////////////////////////////////////////

// ? True : False

// var hello = "hey";

// if hello="hey" then console.log("Fsjs") otherwise print ("ajay")

// hello=="hey" ? console.log("Fsjs"): console.log("Ajay Chauhan");


/////////////////////////////////////////Arrayyyyyyy///////////////////////////////////////////////////////////

// let names = ["Ajay","Bhushan","Chahat","Dipesh","Esha","Farukh"];
// console.log(names)

// let namess = new Array("Ajay","Bhushan","Chahat","Dipesh","Esha","Farukh");
// console.log(namess)


/////////////////////////////////////////loops//////////////////////////////////////////////////////////////////

// - while
// - dowhile
// - for
// - for of
// - for in

// const number = {1: 1,2: 2,3: 3,4: 4,5: 5};
// for (const num in number){
//     console.log(num)
// }

///////////////////////////////////////////Functions///////////////////////////////////////////////////////////

//Normal Functions
//Function with return type and Parameter
//Anonymous Function
//Expression Function
//Self Invoking Function

//////////////////////////////////////////Objects/////////////////////////////////////////////////////////////

let userDetails = {
    firstName: "Anurag",
    lastName: "Chaurasia",
    website: "anuchaurasia.com",
    courseList: [],
    buyCourse: function(courseName){ // this will called an object method
        this.courseList.push(courseName); // cant use userdetails instead of this because of different scope
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in ${this.courseList.length}`;
    }
    
};

// console.log(userDetails);

userDetails.buyCourse("FSJS");
console.log(userDetails)
console.log(userDetails.getCourseCount)


