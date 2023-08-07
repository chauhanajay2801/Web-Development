//1
// let a =1;
// let b =1;
// let c =2;
// let d = (--c == a)
// console.log(d); //yaha pr true aayega to true ko jab numeric value s  compare karenge to false aayega
// console.log(--c === a === b);

//2
// console.log(+true) //gives one because any + before boolean makes it numeric
// console.log(typeof +true)

//3
// let a = 3;
// let b = new Number(3); // ye object bana hai
// console.log(typeof b);
// console.log(a==b); //true kyuki value dono mein same hain
// console.log(a===b); //false kyuki value to same hai par data type alag hain

//4
// let number = 0;
// console.log(number++) //0 -- kyuki post increment hhua console log pehle hi ho gaya tha
// console.log(++number) // 2
// console.log(number) //2

//5
// function getAge(...args){
//     console.log(typeof args); //object aayega
// }
// getAge(22)

//6
// function getAge(){
    // 'use strict'; // error because it need to declare all the things needed
    // age = 21; // jab bhi kuch define nahi larte to var bn jata hai 
    // console.log(age);
// }
// getAge();

//7 
// const sum = eval('10*10+5') // STRING PE OPERATION KARTA HAI EVAL AUR AB OUTPUT AAYEGA 105
// console.log(sum);

//8 --------------------------unresolved---------------------------------------------
// function sayHi(){return(() => 0)();}
// console.log(typeof sayHi());


