import _ from 'lodash';

//1 Output Based Question
// const func = (function(a){
    // delete a; //dont delete the local variable only used on the objects
    // return a;
// })(5);

// console.log(func)

//2 Add the dynamic property to objects

// const property = "Ajay Chauhan"
// const rollNo = 650410101001

// const user = {
//     [property]:rollNo
// }

// console.log(user["Ajay Chauhan"])

//3 Loop through Array
// let person = {
//     name:"Ajay Chauhan",
//     age:28,
//     "is a frontend Developer":true
// };

// for(key in person){
//     console.log(person[key])
// }

//4 Output
// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// };
// console.log(obj)

//5 create a function that multiplies all the numeric value by two 

// let nums = {
//     a:100,
//     b:200,
//     title: "My Nums"
// };

// function a(obb){
//     for(key in obb){
//         if(typeof obb[key] === "number"){
//             obb[key] = obb[key] * 2
//         }
//     }
// }

// a(nums)
// console.log(nums)

//6 
// const a = {};
// const b = {key:"b"}
// const c = {key:"c"}

// a[b] = 123; //a["[Object Object]"] =123
// a[c] = 456; //a["[Object Object]"] =456
// console.log(a,b,c)
// console.log(a[b])

//7 what is Json.stringify and json.parse?

// const user = {
    // name:"Ajay Chauhan",
    // age:28
// };

// let userSt = JSON.stringify(user)
// console.log(userSt)
// console.log(typeof userSt)

// console.log(JSON.parse(userSt))

// used in localStorage
// localStorage.setItem("test",userSt)
// console.log(JSON.parse(localStorage.getItem("test")))


//8 Output
// console.log([..."Ajay"])

//9 
// const user = {name:"Ankit" , age:21};
// const admin = {admin:true , ...user};
// console.log(admin)

//10 
// const settings = {
//     username: "Ajay Chauhan",
//     level: 19,
//     health:90
// };

// const data = JSON.stringify(settings,["level","health"]); // will ignore the username property
// console.log(data)

//11
// const shape = {
//     radius: 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }

// console.log(shape.diameter())
// console.log(shape.perimeter())

//12 What is destructuring?

// const settings = {
//     name: "Ajay Chauhan",
//     level: 19,
//     health:90,
//     username:{
//         first: "HAnsraj",
//         last: "Raghuvanshi"
//     }
// };

// const {name:ajay,level} = settings // giving the value so that if there is more thana one value with sam name it doesnt create any problem
// const {username: { first }} = settings
// console.log(ajay)
// console.log(first)

//13
// function getItems(fruitList, favouriteFruit, ...args){
//     return [...fruitList,...args,favouriteFruit]
// }

// let a = getItems("banana","orange",["Kiwi","pear"])
// console.log(a)

//14 ---- object referencing ----
// let c = {greeting : "Hey"};
// let d;
// d=c;
// c.greeting = "Hello";
// console.log(d.greeting)

//15
// console.log({ a : 1 } == { a : 1 }) // both have difference space 
// console.log({ a : 1 } === { a : 1 })

//16 
// let person = { name: "Shlok" };
// const members = [person];
// person = null
// console.log(members)

//17 
// const value = { number: 10 };

// const multiply = (x= {...value}) => {
//     console.log((x.number *= 2))
// }

// multiply()
// multiply()
// multiply(value) // when we directly passed this value the value is modified in the object
// multiply(value)

//18 
// function changeAgeAndReference(person){
//     person.age = 25; // it will change the given reference
//     person = { // reassigning value ,no change on the eference object
//         name:"John",
//         age:50
//     };
//     return person;
// }

// const personObj1 = {
//     name:"Alex",
//     age:30
// }

// const personObj2 = changeAgeAndReference(personObj1)
// console.log(personObj1) 
// console.log(personObj2) 

//19
// shallow copy 
// spread operator and the object.assign will make the copy but in nested they will point to the same

// const obSpread = {...personObj1} // the nested object are pointing to each other
// personObj1.languages.first = "Ruby on rails"
// console.log(obSpread)
// console.log(personObj1)
// const objClone = Object.assign({},personObj1) // the nested object are pointing to each other
// personObj1.name = "Parikshit"
// objClone.languages.first = "Javascript"
// console.log(personObj1)
// console.log(objClone)


//Deep copy
const personObj1 = {
    name:"Alex",
    age:30,
    languages : {
     first: "C",
     second : "Java"
    },
    add: function(){}
}
//using stringify --Problem--functions wont be accepted-- pick hi nahi karega-- lot of time
// const obj2 = JSON.parse(JSON.stringify(personObj1))
// personObj1.languages.first = "Js"
// personObj1.age = 88
// console.log(personObj1)
// console.log(obj2)

//using loadash
// const obj2 = _.cloneDeep(personObj1)
// console.log(obj2)

