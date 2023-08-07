///////////////////////////////////////Spread///////////////////////////////////////////////

// let ar1 = ["hey", "it", "is", "array1"];
// let ar2 = ["hola", "it", "is", "array2"];

// let ar3= ar1.concat(ar2); // to concatenate

// let ar3 = [...ar1, ...ar2] // spread to create array with two or three array

// let ar3 = [...ar1]; // creating deep copy 

// ar3.push("okay")

// console.log(ar1);
// console.log(ar3);


// const names = ["Alia", "Deepika","Sushmita"];

// function getNames(n1,n2,n3){
//     console.log(n1,n2,n3);
// }

// getNames(...names);


////////////////////////////////////////////Object use//////////////////

// const emp1 = {
//     name:"Ajay",
//     age:28,
//     job:"Frontend Developer"
// };

// const emp2 = {
//     address:"Jawahar colony",
//     city:"Faridabad",
//     sibling:"1"
// };

// const emp3 = {...emp1,...emp2};
// const emp = {...emp1};

// console.log(emp3);


/////////////////////////////////////////Function calls//////////////////////////////

// console.log(Math.min(10,3,5,7,32,56,7,1,55,78));

// const scoreList = [100,45,12,98,55,34,78,33,43]

// console.log(Math.min(...scoreList));
// console.log(Math.max(...scoreList));




/////////////////////////////////////////////////////////Rest/////////////////////////////////////////////

// function sum(...val){
//     sum = 0;
//     val.map(e=>sum+=e);
//     console.log(sum);
// }

// sum(2,3,4);

// function calculate(type,...val){
//     type(...val);
// }

// calculate(sum,10,20,2,78,10);



//////////////////////////////object/////////////////////////////

var students={
    name:"Ajay",
    age:28,
    hobbies:["Travelling","Cycling"]
}

const {age,...rest} = students;
console.log(rest);
console.log(age);

// /////////////////////////////////Spread for object

// var newStudent = {...students, age:30};

// console.log(newStudent);

