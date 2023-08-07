//1
// let a = [];
// let b = [];
// console.log(a==b); //the memory loaction is getting compared thats why false
// console.log(a===b)

//2
// let a = []; 
// let b = a;
// console.log(a==b);
// console.log(a===b);

//3
// let a = [10];
// let b = [10];
// console.log(a[0]==b[0]); //because we are comparing element
// console.log(a[0]===b[0]); //comparing element and data type

//4
// let a = [1,2,3,4]
// let b = {name:"Ajay"}
// console.log(...a); //array to string conversion --destructuring done--

//5
// console.log(typeof NaN);// number

//6
// let data = 10- -10; // - - = +
// console.log(data);

//7
// const set = new Set([1,1,2,3,4])
// console.log(set); // set removes the duplicate values



//8
// const name = "Ajay";
// console.log(name()); //error not a function

//9
// const result = false || {} || null ||20; // 20 bhi positice hai pr ye pehli positive value pr ruk jata hai
// console.log(result); // jab bhi aur use karte h to positive value leta h, object + value hai

//10
// const result = null || false || '' || false;
// console.log(result); // empty string blank dikhega , agar koi value nahi milti to last value utata h


//11
// const result = [] || 0 || true;
// console.log(result); //array because array is true

//12
// console.log(Promise.resolve(5));
// op Promise fulfilled 5 -- kyuki jb bh resolve karte hai usme apne ap mein ek promise hota hai


 //13
// let name = "Ajay";
// function getName(){
//     console.log(name);
//     let name = "Chauhan";
// }
// getName(); //Error


//14
// let name = "Ajay";
// function getName(){
//     console.log(name);
// }
// getName(); //Ajay  //andar  vala bahar nahi bahar vala andar aa sakta hai


//15
// console.log(`${(x=>x)("I love")} to program`)

//16
// function sumValues(x,y,z){
    // return x+y+z;
// }
// console.log(sumValues(...[1,2,3])); //destructuring the value

//17
// const name = "Ajay Chauhan";
// console.log(!typeof name === 'object'); //false both // 
// console.log(!typeof name === 'string');

//18 === convert string value into boolean false value
// let data = "true";
// console.log(!data);

//19 === convert string value into boolean true value
// let data = "true";
// console.log(!!data);

// //20 --- 
// let a = 1;
// let b = 2;
// console.log(--b === a); //true --c =1 dats why true




