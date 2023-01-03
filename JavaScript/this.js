// let x = this;
// console.log(x);

// const person = {
   
//     fullname: function(){
//         return this.fname + " " + this.lname;}
//     }

// const person2 = { fname:"Ajay",
// lname:"Chauhan",
// id:0908
// }

// console.log(person.fullname.call(person2)); // calling func1 and taking person2 as argument

const person3 = {
    fname:"Ajay",
    lname:"Chauhan",
    id:0908,
    fullname: function(){
        return this.fname + " " + this.lname;}
    }

const person4 = { 
    fname:"Sam",
    lname:"Johnson"}

let fullname = person3.fullname.bind(person4); // borowing function methd from person 3 object
console.log(fullname);
