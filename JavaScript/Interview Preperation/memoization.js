let sum = 0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}


const memoize =(fun)=>{
    let cache = {};
    return function(...args)
}


console.time();
console.log(calc(5));
console.timeEnd();