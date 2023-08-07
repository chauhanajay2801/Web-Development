//.....................................................Map........................................................................

// const arr = [1,2,3,4,5];

// function double(x){
//     return x*2;
// }

// const output = arr.map(double);
// console.log(output)

// const op = arr.map(function binary(x){ return x.toString(2); });
// console.log(op)

// const opp = arr.map((x) =>  x.toString(2));
// console.log(opp)

//.....................................................Filter........................................................................

// const arr = [2,6,1,4,9,7,34,76,89];

// function isOdd(x){
//     return x%2;
// }

// const op = arr.filter(isOdd);
// console.log(op)

// function isEven(x){
//     return x%2==0;
// }

// const opp = arr.filter(isEven);
// console.log(opp)

//.....................................................Reduce........................................................................

// const arr = [28, 2, 8, 4, 5];
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (sum < arr[i]) {
//       sum = arr[i];
//     }
//   }
//   return sum;
// }

// console.log(findSum(arr));

// const op = arr.reduce(function (acc, curr) {
//   if (acc < curr) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(op);

const users = [
  { firstName: "Ajay", lastName: "Chauhan", age: 28 },
  { firstName: "Vijay", lastName: "Chauhan", age: 22 },
  { firstName: "Dhanjay", lastName: "Chauhan", age: 28 },
  { firstName: "Sanjay", lastName: "Chauhan", age: 17 },
];

// fullname of the user
// const op = users.map(x=> x.firstName + " "+ x.lastName)
// console.log(op)

//{28:2,17:1,22:1}
// const op = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(op);

const output = 
users.filter((x) => x.age < 23)
.map((x) => x.firstName);
console.log(output);
