// spread and rest 
// .... is called spread // sending the data 
// .... is called rest // accumulating the data

function someone(x,y,z,q,m) {
    return x+y+z-q-m;
}

let vari = [5,7,5,4,2];

console.log(someone(...vari)); //spread