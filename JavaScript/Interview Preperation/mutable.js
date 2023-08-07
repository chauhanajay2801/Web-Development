//Immutable

let x = 21;
let y = x;

y = y+1;

console.log(x);
console.log(y);

// Mutable

let a = [1,2,3,4,5,6]

let b = a;

console.log(a)
console.log(b)

b.push(6);

console.log(b)
console.log(a)

//lets make it immutable

let c = [1,2,3,4,5,6]

let d = [...c] // spread operator to make it immutale
// or we can use------ c.concat();
console.log(c)
console.log(d)

c.push(6);

console.log(c)
console.log(d)

////////object are also mutable

let ob1 = {
    name :"Ajay",
    city:"Faridabad"
}

let ob2 = ob1;

ob2.age = 20;

console.log(ob1);
console.log(ob2);

let ob3 = Object.assign({},ob1);
let ob4 = {...ob1};

ob3.state="Haryana";
console.log(ob1);
console.log(ob3);
console.log(ob4);
