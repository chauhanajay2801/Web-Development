//1
// delete person["is a frontend Developer"]
// console.log(person)
// Object.seal(person); //after seal can change the ezisting value but not any new value
// console.log(person.name);
// person.age = 29;
// person.name = "James";
// delete person.name;
// console.log(person);

//2 -- Name property without . operator
// const data = {name:"Ajay",age:28}
// const {name,age} = data;
// console.log(name)

//3-- How to merge objects
// const emp1 = { 
    // name: "Ajay", 
    // age: 28,
    // sex:"m"
// };
// const emp2 = {
    // name: "Steve",
    // age: 38,
// };
// const data3 = {...emp1, ...emp2};
// console.log(data3); // agar object mein ek jaise data hoga ---bole to keys to last vala object print hoga


//4
// let data = {name:"Ajay", age:28, skills:"Js"};
// let info = {city:"noida"};
// data = {data,...info};
// console.log(data); //internal object bnega and info destructure ho jayega

//5
// let data = {name:"Ajay", age:28, skills:"Js"};
// let info = {city:"noida",skills:"Mern"};
// data = {...data,...info}; // dono khul rahe hai to postion first ki hogi last vala added skill reh jayega
// console.log(data); 

//6
// let data = {name:"Ajay"};
// console.log(delete data.name); // return true -- when the delete operation is done it return true thats why returning true
// console.log(data) // blank object

//7
// let data = {name:"Ajay"};
// console.log(delete data); // false -- because the data cant be delete by this delete operator we can delete only property


//8
// const obj = { 1:"one" , 2:"two", 3:"three"};
// console.log(obj.hasOwnProperty(1)) 
// console.log(obj.hasOwnProperty("1")) // both will return true