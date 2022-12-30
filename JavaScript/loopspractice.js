//for loop

// for(let i =0; i<=5; i++){
//     console.log(i * i);
// }

//do whileloop

// let i = 0;// min one loop is executed
// do{
//     console.log(i*i)
//     i++;
// }
// while(i<=1);

//while loop

// let i = 0;
// while(i<=5){
//     console.log(i+1);
//     i++
// }

//for of loop usually used for array basically iterable like array, strings, maps, nodelists

// const cars = ["bmw","Jaguar","landrover","tata","Honda","toyota"];
// let  text = "";
// for (let a of cars){
//     text += a; 
// }
// console.log(text);

// for in loop iterate through the properties of the object

// const cars = {german:"bmw",British:"Jaguar",Indian:"landrover",Japenese:"Honda"};

// let x = "";
// for(let i in cars){
//     x += cars[i] + " ";
// }

// console.log(x);

//for each method calls a function that is a callback function once for every array element.

const cars = [1,5,85,78,95,35,71,69];

let x = "";
cars.forEach(myfunc);

function myfunc(value,index,array){
    x += value;
}

console.log(typeof(x));
console.log(x);


