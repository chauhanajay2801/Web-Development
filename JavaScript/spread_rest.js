// spread and rest 
// .... is called spread // sending the data 
// .... is called rest // accumulating the data

function someone(x,y,z,q,m) {
    return x+y+z-q-m;
}

let vari = [5,7,5,4,2];

console.log(someone(...vari)); //spread and the data is divided it is called as spread


// Rest

function sum(...args){  //rest operator
    console.log(args); // it is making the array and the spread is breaking the array
    let sum =0;
    for (const x of args){
        sum = sum+x;
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))

