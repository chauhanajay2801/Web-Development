let text = "It is javacsipt regex program";
let num = "1,2,3,4,5,6,7,8,9";
let a = text.search(/javacsipt/i);//i for case insensitive
let b = text.match(/[a,b,c]/g);//g for global goes till the end
// let c = num.match(/[1-3]/g);
const m = /[1-3]/g;
let n;


console.log(b);
console.log(m.test("1,2,8,9")); //test method is regex method.(t,f)
console.log(/ava/.exec("It is javacsipt regex program")); //exec method is regex method.(index or null)




