// const user = {
    // firstName:"Ajay",
    // lastName:"Chauhan",
    // address:{
        // city:"Delhi",
        // country:"India"
    // }
// }

// const name = user.firstName;
// const address = user.address.city;  /////////////////////normal case
// console.log(name);
// console.log(address);

// const {firstName:fn,lastName,sex="male",address:{city}} = user;  //destructuring
// console.log(fn,lastName,sex,city);

// const {firstName:fn,lastName:ln,...userinfoo} = user;   //Rest operator
// console.log(fn)
// console.log(ln)
// console.log(userinfoo)


////////////////////////////////////Array/////////////////////////

const score = [10,22,56,7,87,45,22,90];

// const [a, ,c] = score;
// console.log(a,c);

const [a,b,c,...rt] = score;
console.log(a)
console.log(rt)