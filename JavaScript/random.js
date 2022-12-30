console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*11));
console.log(Math.floor(Math.random()*101));


function getrandom(min,max){
    return Math.floor(Math.random() * (max - min)) + min +1; // 10-1= 9+1=10+1 give val till 10
}

let a = getrandom(1,10)
console.log(a);