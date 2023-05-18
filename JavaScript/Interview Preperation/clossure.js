function a(a,b){
    return function (c){
        return a+b+c;
    }
    
}

// let dip = a(9,8)(5);
// console.log(dip)

let dip = a(7,7);
console.log(dip(3));